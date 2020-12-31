import { createDefaultProject } from './project';

const LOCAL_STORAGE_PROJECTS_KEY = 'todoList.projects'

export function getProjects() {
    if (isLocalStorageKeyPopulated(LOCAL_STORAGE_PROJECTS_KEY)) {
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY));
    } else {
        const projects = [createDefaultProject()]
        saveProjects(projects);
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