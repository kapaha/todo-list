import { generateId } from './todoList';
import { createDefaultTodos } from './todo';

export default class Project {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.id = generateId();
        this.todoList = [];
    }
}

export function createDefaultProject() {
    const defaultProject = new Project('Default', 'grey');
    const defaultTodos = createDefaultTodos();

    defaultTodos.forEach(todo => {
        defaultProject.todoList.push(todo);
    });

    return defaultProject;
}
