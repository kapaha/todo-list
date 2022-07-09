import { getSelectedProjectId } from './localStorage';
import { highlightProjectBtn, setEyeBtnTitle, toggleEyeIcon } from './dom';
import { getTodoCount, formatDate, getDateColor } from './todoList';

const templates = {
    project: document.querySelector('[data-template="project"'),
    projectView: document.querySelector('[data-template="project-view"]'),
    todo: document.querySelector('[data-template="todo"]'),
    todoModal: document.querySelector('[data-template="modal-todo"]'),
};

function getFragmentFromTemplate(template) {
    if (template == null) return null;
    return document.importNode(template.content, true);
}

function createTodoModal(
    modalId,
    modalTitleText,
    formDatasetForm,
    todoNameInputId,
    todoDueDateInputId,
    submitBtnText
) {
    const fragment = getFragmentFromTemplate(templates.todoModal);

    const modal = fragment.querySelector('.modal');
    const modalTitle = fragment.querySelector('.modal__title');
    const form = fragment.querySelector('form');
    const todoNameLabel = form.querySelector('[data-label="todo-name"]');
    const todoNameInput = form.querySelector('[data-input="todo-name"]');
    const todoDueDateLabel = form.querySelector('[data-label="todo-due-date"]');
    const todoDueDateInput = form.querySelector('[data-input="todo-due-date"]');
    const submitBtn = form.querySelector('[type="submit"]');

    modal.id = modalId;
    todoNameInput.id = todoNameInputId;
    todoDueDateInput.id = todoDueDateInputId;

    form.dataset.form = formDatasetForm;

    todoNameLabel.setAttribute('for', todoNameInputId);
    todoDueDateLabel.setAttribute('for', todoDueDateInputId);

    modalTitle.textContent = modalTitleText;
    submitBtn.textContent = submitBtnText;

    return fragment;
}

export function createProjectComponent(project) {
    const fragment = getFragmentFromTemplate(templates.project);

    const projectTitle = fragment.querySelector('.project-name');
    const projectColor = fragment.querySelector('.project-color');
    const todoCount = fragment.querySelector('.todo-count');
    const projectEl = fragment.querySelector('.project');

    projectEl.dataset.projectId = project.id;
    projectTitle.textContent = project.name;
    todoCount.textContent = getTodoCount(project);
    projectColor.style.color = project.color;

    if (project.id === getSelectedProjectId()) {
        const projectRowBtn = fragment.querySelector(
            '[data-btn="show-project-view"]'
        );
        highlightProjectBtn(projectRowBtn);
    }

    return fragment;
}

export function createProjectViewComponent(project) {
    const fragment = getFragmentFromTemplate(templates.projectView);

    const container = fragment.querySelector('.project-view');
    const projectName = fragment.querySelector('.project-name');
    const todoContainer = fragment.querySelector(
        '[data-container="todo-container"]'
    );
    const eyeBtn = fragment.querySelector('[data-btn="toggle-complete-todos"]');
    const eyeIcon = fragment.querySelector('.fa-eye');

    container.dataset.projectId = project.id;
    projectName.textContent = project.name;

    project.todoList.forEach((todo) => {
        const todoComponent = createTodoComponent(todo);
        todoContainer.appendChild(todoComponent);
    });

    if (project.showCompleteTodos) {
        toggleEyeIcon(eyeIcon);
        todoContainer.style.setProperty('--complete-todo-display', 'flex');
    } else {
        todoContainer.style.setProperty('--complete-todo-display', 'none');
    }

    setEyeBtnTitle(eyeBtn, project.showCompleteTodos);

    return fragment;
}

export function createTodoComponent(todo) {
    const fragment = getFragmentFromTemplate(templates.todo);
    const todoEl = fragment.querySelector('.todo');
    const todoCheckbox = fragment.querySelector('[data-checkbox="todo"]');
    const todoLabel = fragment.querySelector('[data-label="todo-checkbox"]');
    const todoName = fragment.querySelector('.todo-name');
    const todoDueDate = fragment.querySelector('.todo-due-date');

    todoEl.dataset.todoId = todo.id;
    if (todo.isComplete) todoEl.classList.add('todo--complete');
    todoCheckbox.id = `todo-checkbox-${todo.id}`;
    todoCheckbox.checked = todo.isComplete;
    todoLabel.setAttribute('for', `todo-checkbox-${todo.id}`);
    todoName.textContent = todo.name;
    todoDueDate.textContent = formatDate(todo.dueDate);
    todoDueDate.style.color = getDateColor(todo.dueDate);

    return fragment;
}

export function createModals() {
    const modals = [];

    const addTodoModal = createTodoModal(
        'modal-add-todo',
        'Add Todo',
        'add-todo',
        'input-add-todo-name',
        'input-add-todo-due-date',
        'Add'
    );
    const editTodoModal = createTodoModal(
        'modal-edit-todo',
        'Edit Todo',
        'edit-todo',
        'input-edit-todo-name',
        'input-edit-todo-due-date',
        'Edit'
    );

    modals.push(addTodoModal, editTodoModal);

    return modals;
}
