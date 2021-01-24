import addGlobalEventListener from './events';
import * as dom from './dom';
import Project from './project';
import * as ls from './localStorage';
import Todo from './todo';

export function initGlobalEventListeners() {
    addGlobalEventListener('click', '[data-header-toggle]', dom.toggleSideMenu);

    addGlobalEventListener('click', '[data-modal-target]', (e) => {
        const el = e.target;
        const modal = document.querySelector(el.dataset.modalTarget);

        if (el.dataset.btn === "edit-todo") {
            const projectId = getClosestProjectId(el);
            const todoId = getClosestTodoId(el);
            const todo = getTodoById(projectId, todoId);
            populateTodoForm(todo, modal);
        }

        dom.showModalAndOverlay(modal);
    });

    addGlobalEventListener('click', '#overlay', dom.hideAllModalsAndOverlay);

    addGlobalEventListener('click', '[data-btn="close-modal"]', (e) => {
        // get the parent modal
        const modal = e.target.closest('.modal');
        dom.closeModalAndHideOverlay(modal);
    });

    addGlobalEventListener('submit', '[data-form="create-project"]', handleCreateProjectFormSubmit);

    addGlobalEventListener('submit', '[data-form="add-todo"]', handleAddTodoForm);

    addGlobalEventListener('submit', '[data-form="edit-todo"]', handleEditTodoForm);

    addGlobalEventListener('click', '[data-btn="show-project-view"]', (e) => {
        const projectBtn = e.target;
        const projectId = getClosestProjectId(projectBtn);

        // return if project is already selected
        if (projectId === ls.getSelectedProjectId()) return;

        const project = getProjectById(projectId);

        handleProjectViewChange(project);
    });

    addGlobalEventListener('click', '[data-btn="delete-project"]', (e) => {
        const projectId = getClosestProjectId(e.target);

        ls.removeProject(projectId);
        dom.renderProjects();

        if (projectId === ls.getSelectedProjectId()) {
            ls.removeSelectedProjectId();
            dom.removeProjectView();
        }
    });

    addGlobalEventListener('click', '[data-btn="delete-todo"]', (e) => {
        const projectId = getClosestProjectId(e.target);
        const todoId = getClosestTodoId(e.target);

        deleteTodo(todoId, projectId)
    });

    addGlobalEventListener('change', '[data-checkbox="todo"]', handleTodoCheckboxChange);
}

export function getSelectedProject() {
    const selectedProjectId = ls.getSelectedProjectId();
    return getProjectById(selectedProjectId);
}

export function generateId() {
    return Date.now().toString();
}

export function editObject(object, properties) {
    for (const property in properties) {
        if (object.hasOwnProperty(property)) {
            object[property] = properties[property];
        }
    }
}

export function getTodoCount(project) {
    return project.todoList.filter(todo => !todo.isComplete).length || '';
}

function handleCreateProjectFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = dom.getCreateProjectFormData();

    if (!isValidCreateProjectFormData(formData)) return;

    const formatedFormData = formatCreateProjectFormData(formData);
    const project = new Project(
        formatedFormData.name,
        formatedFormData.color
    );

    ls.addProject(project);
    dom.renderProjects();
    handleProjectViewChange(project);

    form.reset();

    const modal = form.closest('.modal');
    dom.closeModalAndHideOverlay(modal);
}

function isValidCreateProjectFormData(formData) {
    return isValidName(formData.name);
}

function formatCreateProjectFormData(formData) {
    // clone the object
    const formDataClone = { ...formData };

    // format data
    formDataClone.name = formDataClone.name.trim();

    return formDataClone;
}

function getClosestProjectId(element) {
    const projectEl = element.closest('[data-project-id]');
    return projectEl.dataset.projectId;
}

function getProjectById(projectId) {
    return ls.getProjects().filter(project => project.id === projectId)[0];
}

function getTodoById(projectId, todoId) {
    const project = getProjectById(projectId);
    return project.todoList.filter(todo => todo.id === todoId)[0];
}

function handleProjectViewChange(project) {
    ls.saveSelectedProjectId(project.id);
    dom.highlightProjectBtn(getProjectBtn(project));
    dom.renderProjectView(project);
}

function getProjectBtn(project) {
    return document.querySelector(`li[data-project-id="${project.id}"]`)
}

function handleAddTodoForm(e) {
    e.preventDefault();

    const form = e.target;
    const formData = dom.getTodoFormData(form);

    if (!isValidTodoFormData(formData)) return;

    const formatedFormData = formatTodoFormData(formData);
    const projectId = ls.getSelectedProjectId();
    const todo = new Todo(
        formatedFormData.name,
        formatedFormData.dueDate
    );
    const modal = form.closest('.modal');

    addTodo(todo, projectId);

    form.reset();
    dom.closeModalAndHideOverlay(modal);
}

function handleEditTodoForm(e) {
    e.preventDefault();

    const form = e.target;
    const formData = dom.getTodoFormData(form);

    if (!isValidTodoFormData(formData)) return;

    const formatedFormData = formatTodoFormData(formData);
    const projectId = ls.getSelectedProjectId();
    const todoId = getClosestTodoId(form);
    const modal = form.closest('.modal');

    ls.editTodo(todoId, projectId, {
        name: formatedFormData.name,
        dueDate: formatedFormData.dueDate
    });

    const project = getProjectById(projectId);

    form.reset();
    dom.renderProjectView(project);
    dom.closeModalAndHideOverlay(modal);
}

function addTodo(todo, projectId) {
    // save todo to local storage
    ls.addTodo(todo, projectId);

    // get the updated project
    const project = getProjectById(projectId);

    dom.renderProjectView(project);
    dom.updateTodoCount(project);
}

function isValidTodoFormData(formData) {
    return isValidName(formData.name);
}

function isValidName(name) {
    return name != null && name.trim() !== '';
}

function formatTodoFormData(formData) {
    // clone the object
    const formDataClone = { ...formData };

    // format data
    formDataClone.name = formDataClone.name.trim();

    return formDataClone;
}

function getClosestTodoId(element) {
    const todoEl = element.closest('[data-todo-id]');
    return todoEl.dataset.todoId;
}

function deleteTodo(todoId, projectId) {
    ls.deleteTodo(todoId, projectId);

    // get the updated project
    const project = getProjectById(projectId);

    dom.renderProjectView(project);
    dom.updateTodoCount(project);
}

function handleTodoCheckboxChange(e) {
    const checkbox = e.target;
    const projectId = getClosestProjectId(checkbox);
    const todoId = getClosestTodoId(checkbox);

    if (checkbox.checked) {
        ls.editTodo(todoId, projectId, { isComplete: true });
    } else {
        ls.editTodo(todoId, projectId, { isComplete: false });
    }

    const project = getProjectById(projectId);
    dom.updateTodoCount(project);
}

function populateTodoForm(todo, modal) {
    const todoNameInput = modal.querySelector('#input-edit-todo-name');
    const todoDueDateInput = modal.querySelector('#input-edit-todo-due-date');

    modal.dataset.todoId = todo.id;

    todoNameInput.value = todo.name;
    todoDueDateInput.value = todo.dueDate;
}