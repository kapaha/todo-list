import { createDefaultProject } from './project';

const LOCAL_STORAGE_PROJECTS_KEY = 'todoList.projects'
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'todoList.selectedProjectId';

export function getProjects() {
    if (isLocalStorageKeyPopulated(LOCAL_STORAGE_PROJECTS_KEY)) {
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY));
    } else {
        const projects = [];
        const defaultProject = createDefaultProject();

        projects.push(defaultProject);

        saveProjects(projects);
        saveSelectedProjectId(defaultProject.id);

        return projects;
    }
}

export function addProject(project) {
    const projects = getProjects();
    projects.push(project)
    saveProjects(projects);
}

export function removeProject(projectId) {
    let projects = getProjects();
    projects = projects.filter(project => project.id !== projectId);
    saveProjects(projects);
}

function isLocalStorageKeyPopulated(key) {
    return !!localStorage.getItem(key)
}

function saveProjects(projects) {
    localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(projects));
}

export function getSelectedProjectId() {
    return localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY);
}

export function saveSelectedProjectId(projectId) {
    localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY, projectId);
}

export function removeSelectedProjectId() {
    localStorage.removeItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY);
}
