import { getSelectedProjectId } from './localStorage';
import { highlightProjectBtn } from './dom';

const templates = {
    project: document.querySelector('[data-template="project"'),
    projectView: document.querySelector('[data-template="project-view"]'),
    todo: document.querySelector('[data-template="todo"]')
}

function getFragmentFromTemplate(template) {
    if (template == null) return
    return document.importNode(template.content, true);
}

export function createProjectComponent(project) {
    const fragment = getFragmentFromTemplate(templates.project);

    const projectTitle = fragment.querySelector('.project-name');
    const projectColor = fragment.querySelector('.project-color');
    const todoCount = fragment.querySelector('.todo-count');
    const projectEl = fragment.querySelector('.project')

    projectEl.dataset.projectId = project.id;
    projectTitle.textContent = project.name;
    todoCount.textContent = project.todoList.length;
    projectColor.style.color = project.color;

    if (project.id === getSelectedProjectId()) {
        const projectRowBtn = fragment.querySelector('[data-btn="show-project-view"]')
        highlightProjectBtn(projectRowBtn);
    }

    return fragment;
}

export function createProjectViewComponent(project) {
    const fragment = getFragmentFromTemplate(templates.projectView);

    const container = fragment.querySelector('.project-view');
    const projectName = fragment.querySelector('.project-name');

    container.dataset.projectId = project.id;
    projectName.textContent = project.name;

    return fragment;
}

export function createTodoComponent(todo) {
    const fragment = getFragmentFromTemplate(templates.todo);
}