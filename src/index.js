import { initGlobalEventListeners, getSelectedProject } from './todoList';
import { renderModals, renderProjects, renderProjectView } from './dom';

init();

function init() {
    renderModals();
    renderProjects();
    renderProjectView(getSelectedProject());
    initGlobalEventListeners();
}