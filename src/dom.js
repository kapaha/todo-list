import { createProjectComponent } from './components';
import { getProjects } from './localStorage';

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
        const projectComponent = createProjectComponent(project);
        fragment.appendChild(projectComponent);
    });

    removeAllChildElements(elems.projectsContainer);
    elems.projectsContainer.appendChild(fragment);
}

const elems = {
    body: document.body,
    sideMenu: document.querySelector('[data-side-menu]'),
    overlay: document.getElementById('overlay'),
    projectsContainer: document.getElementById('projects-container'),
    projectNameInput: document.getElementById('input-project-name'),
    projectColorInput: document.getElementById('input-project-color')
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