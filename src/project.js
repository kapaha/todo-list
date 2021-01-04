export default class Project {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.id = getId();
        this.todoList = [];
    }
}

export function createDefaultProject() {
    return new Project('Default', 'grey');
}

function getId() {
    return Date.now().toString();
}