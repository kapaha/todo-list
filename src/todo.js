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
        new Todo('Brush Teeth', 'Jan 22 3:30 PM', 'defaultTodo1'),
        new Todo('Make Breakfast', 'Today 12:00 PM', 'defaultTodo2'),
        new Todo('Study', 'Tomorrow 9:00 PM', 'defaultTodo3'),
    ];
}