import addGlobalEventListener from './events';
import * as dom from './dom';
import Project from './project';
import * as ls from './localStorage';
import Todo from './todo';

export function initGlobalEventListeners() {
    addGlobalEventListener('click', '[data-header-toggle]', dom.toggleSideMenu);

    addGlobalEventListener('click', '[data-modal-target]', (e) => {
        // get targeted modal
        const modal = document.querySelector(e.target.dataset.modalTarget);
        dom.showModalAndOverlay(modal);
    });

    addGlobalEventListener('click', '#overlay', dom.hideAllModalsAndOverlay);

    addGlobalEventListener('click', '[data-btn="close-modal"]', (e) => {
        // get the parent modal
        const modal = e.target.closest('.modal');
        dom.closeModalAndHideOverlay(modal);
    });

    addGlobalEventListener('submit', '[data-form="create-project"]', handleCreateProjectFormSubmit);

    addGlobalEventListener('submit', '[data-form="create-todo"]', handleCreateTodoFormSubmit);

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
}

export function getSelectedProject() {
    const selectedProjectId = ls.getSelectedProjectId();
    return getProjectById(selectedProjectId);
}

export function generateId() {
    return Date.now().toString();
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

function handleProjectViewChange(project) {
    ls.saveSelectedProjectId(project.id);
    dom.highlightProjectBtn(getProjectBtn(project));
    dom.renderProjectView(project);
}

function getProjectBtn(project) {
    return document.querySelector(`li[data-project-id="${project.id}"]`)
}

function handleCreateTodoFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = dom.getTodoFormData();

    if (!isValidTodoFormData(formData)) return;

    const formatedFormData = formatTodoFormData(formData);
    const projectId = ls.getSelectedProjectId();
    const todo = new Todo(
        formatedFormData.name,
        formatedFormData.dueDate
    );

    addTodo(todo, projectId);

    form.reset();

    const modal = form.closest('.modal');
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