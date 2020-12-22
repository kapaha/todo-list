import addGlobalEventListener from './events';
import { toggleSideMenu } from './dom';

init();

function init() {
    initGlobalEventListeners();
}

function initGlobalEventListeners() {
    addGlobalEventListener('click', '[data-header-toggle]', toggleSideMenu);
}