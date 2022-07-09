import {
    initGlobalEventListeners,
    getSelectedProject,
} from './modules/todoList';
import { renderModals, renderProjects, renderProjectView } from './modules/dom';
import './styles/styles.css';

init();

function init() {
    renderModals();
    renderProjects();
    renderProjectView(getSelectedProject());
    initGlobalEventListeners();
}
