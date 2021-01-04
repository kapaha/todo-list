import { initGlobalEventListeners, getSelectedProject } from './todoList';
import { renderProjects, renderProjectView } from './dom';

init();

function init() {
    renderProjects();
    renderProjectView(getSelectedProject());
    initGlobalEventListeners();
}