export default class Project {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.id = Date.now();
        this.todoList = [];
    }
}

export function createDefaultProject() {
    return new Project('Default', 'grey');
}