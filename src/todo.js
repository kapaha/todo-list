import { generateId } from './todoList';

export default class Todo {
    constructor(name, dueDate, id) {
        this.name = name;
        this.dueDate = dueDate;
        this.isComplete = false;
        this.id = id || generateId();
    }
}

export function createDefaultTodos() {
    return [
        new Todo('Brush Teeth', '2022-01-02', 'defaultTodo1'),
        new Todo('Make Breakfast', '', 'defaultTodo2'),
        new Todo('Study', '2021-12-01', 'defaultTodo3'),
    ];
}