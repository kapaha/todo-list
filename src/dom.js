import * as comp from './components';
import { getProjects } from './localStorage';
import { getTodoCount } from './todoList'

const HIGHLIGHT_PROJECT_CSS_CLASS = 'project-row-btn--highlight';

export function toggleSideMenu() {
    if (elems.sideMenu == null) return;

    if (isDesktopView()) {
        elems.body.classList.toggle('desktop-open');
        elems.sideMenu.classList.remove('mobile-open');
    } else if (!elems.body.classList.contains('desktop-open')) {
        elems.body.classList.add('desktop-open');
        elems.sideMenu.classList.toggle('mobile-open');
    } else {
        elems.sideMenu.classList.toggle('mobile-open');
    }
}

export function showModalAndOverlay(modal) {
    showModal(modal);
    showOverlay();
}

export function hideAllModalsAndOverlay() {
    // get all active modals
    const modals = document.querySelectorAll('.modal--active');

    // loop through open modals and close them
    modals.forEach(modal => {
        hideModal(modal);
    });

    hideOverlay();
}

export function closeModalAndHideOverlay(modal) {
    hideModal(modal);
    hideOverlay();
}

export function getCreateProjectFormData() {
    // get the form elements values
    const projectName = elems.projectNameInput.value;
    const projectColor = elems.projectColorInput
        .options[elems.projectColorInput.selectedIndex]
        .dataset.cssColor;

    return {
        name: projectName,
        color: projectColor
    }
}

export function renderProjects() {
    const fragment = document.createDocumentFragment();
    const projects = getProjects();

    projects.forEach(project => {
        const projectComponent = comp.createProjectComponent(project);
        fragment.appendChild(projectComponent);
    });

    removeAllChildElements(elems.projectsContainer);
    elems.projectsContainer.appendChild(fragment);
}

export function renderProjectView(project) {
    if (project == null) return;
    const projectViewComponent = comp.createProjectViewComponent(project);
    removeProjectView();
    elems.projectViewContainer.appendChild(projectViewComponent);
}

export function removeProjectView() {
    removeAllChildElements(elems.projectViewContainer);
}

export function highlightProjectBtn(btn) {
    removeHighlightedProjectBtn();
    btn.classList.add(HIGHLIGHT_PROJECT_CSS_CLASS);
}

export function updateTodoCount(project) {
    const todoCountEl = document.querySelector(`[data-project-id="${project.id}"] [data-todo-count]`);
    const todoCount = getTodoCount(project);

    todoCountEl.textContent = todoCount;
}

export function getTodoFormData() {
    const todoName = elems.todoNameInput.value;
    const todoDueDate = elems.todoDueDateInput.value;

    return {
        name: todoName,
        dueDate: todoDueDate
    }
}

const elems = {
    body: document.body,
    sideMenu: document.querySelector('[data-side-menu]'),
    overlay: document.getElementById('overlay'),
    projectsContainer: document.getElementById('projects-container'),
    projectNameInput: document.getElementById('input-project-name'),
    projectColorInput: document.getElementById('input-project-color'),
    projectViewContainer: document.querySelector('[data-container="project-view"]'),
    todoNameInput: document.getElementById('input-todo-name'),
    todoDueDateInput: document.getElementById('input-todo-due-date')
};

function showModal(modal) {
    // check modal exists
    if (modal == null) return;

    // show modal
    modal.classList.add('modal--active');
}

function showOverlay() {
    // check overlay exists
    if (elems.overlay == null) return;

    // show overlay
    elems.overlay.classList.add('active');
}

function hideModal(modal) {
    // check modal exists
    if (modal == null) return;

    // hide modal
    modal.classList.remove('modal--active');
}

function hideOverlay() {
    // check overlay exists
    if (elems.overlay == null) return;

    // hide overlay
    elems.overlay.classList.remove('active');
}

function isDesktopView() {
    return window.matchMedia('(min-width: 768px)').matches;
}

function removeAllChildElements(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function removeHighlightedProjectBtn() {
    const highlightedBtn = document.querySelector(`.${HIGHLIGHT_PROJECT_CSS_CLASS}`);

    if (highlightedBtn == null) return;

    highlightedBtn.classList.remove(HIGHLIGHT_PROJECT_CSS_CLASS);
}