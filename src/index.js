import addGlobalEventListener from './events';
import * as dom from './dom';
import Project from './project';
import * as localStorage from './localStorage';

init();

function init() {
    initGlobalEventListeners();
    dom.renderProjects();
}

function initGlobalEventListeners() {
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

    localStorage.addProject(project);
    dom.renderProjects();

    form.reset();

    const modal = form.closest('.modal');
    dom.closeModalAndHideOverlay(modal);
}

function isValidCreateProjectFormData(formData) {
    return formData.name != null && formData.name.trim() !== '';
}

function formatCreateProjectFormData(formData) {
    // clone the object
    const formDataClone = { ...formData };

    // format data
    formDataClone.name = formDataClone.name.trim();

    return formDataClone;
}