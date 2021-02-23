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
    if (project == null) {
        openSideMenuMobile();
    } else {
        const projectViewComponent = comp.createProjectViewComponent(project);
        removeProjectView();
        elems.projectViewContainer.appendChild(projectViewComponent);
    }
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

export function getTodoFormData(form) {
    const todoName = form.querySelector('[data-input="todo-name"]').value;
    const todoDueDate = form.querySelector('[data-input="todo-due-date"]').value;

    return {
        name: todoName,
        dueDate: todoDueDate
    }
}

export function renderModals() {
    const modals = comp.createModals();
    modals.forEach(modal => {
        elems.body.append(modal);
    });
}

export function toggleTodoContainerDisplay() {
    const todoContainer = elems.projectViewContainer.querySelector('[data-container="todo-container"]');
    const completeTodoDisplay = getComputedStyle(todoContainer)
        .getPropertyValue('--complete-todo-display')
        .trim();

    todoContainer.style.setProperty(
        "--complete-todo-display",
        completeTodoDisplay === "none" ? "flex" : "none"
    );
}

export function toggleEyeIcon(element) {
    element.classList.toggle('fa-eye');
    element.classList.toggle('fa-eye-slash');
}

export function setEyeBtnTitle(eyeBtn, showCompleteTodos) {
    const showCompleteTodosText = 'Show Complete Todos';
    const hideCompleteTodosText = 'Hide Complete Todos';

    const titleText = showCompleteTodos ? hideCompleteTodosText : showCompleteTodosText;

    eyeBtn.setAttribute('title', titleText);
}

export function closeSideMenuMobile() {
    elems.sideMenu.classList.remove('mobile-open');
}

export function openSideMenuMobile() {
    elems.sideMenu.classList.add('mobile-open');
}

export function setTabIndex(element, tabIndex) {
    element.setAttribute('tabIndex', tabIndex);
}

export function getKeyboardFocusableElements (element = document) {
  return [...element.querySelectorAll(
    'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
  )]
    .filter(el => !el.hasAttribute('disabled'))
}

export function removeTabbableFromElements(element) {
    const focusableElements = getKeyboardFocusableElements(element);

    focusableElements.forEach(element => {
        setTabIndex(element, -1);
    });
}

export function addTabbableToElements(element) {
    const focusableElements = getKeyboardFocusableElements(element);

    focusableElements.forEach(element => {
        setTabIndex(element, 0);
    });
}

export function removeTabbableFromModalElements() {
    // get all modals
    const modals = [...document.querySelectorAll('.modal')];

    // get all focusable elements in modals
    const modalFocusableElements = modals.map(getKeyboardFocusableElements).flat();

    modalFocusableElements.forEach(element => setTabIndex(element, -1));
}

const elems = {
    body: document.body,
    sideMenu: document.querySelector('[data-side-menu]'),
    overlay: document.getElementById('overlay'),
    projectsContainer: document.getElementById('projects-container'),
    projectNameInput: document.getElementById('input-project-name'),
    projectColorInput: document.getElementById('input-project-color'),
    projectViewContainer: document.querySelector('[data-container="project-view"]')
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