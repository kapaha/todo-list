const templates = {
    project: document.querySelector('[data-template="project"')
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

    return fragment;
}