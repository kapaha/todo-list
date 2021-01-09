import { generateId } from './todoList';

export default class Project {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.id = generateId();
        this.todoList = [];
    }
}

export function createDefaultProject() {
    return new Project('Default', 'grey');
}
