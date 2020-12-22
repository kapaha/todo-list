import addGlobalEventListener from './events';
import * as dom from './dom';

init();

function init() {
    initGlobalEventListeners();
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
}