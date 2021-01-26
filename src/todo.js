import { endOfYear, add, startOfToday, startOfTomorrow, startOfYesterday } from 'date-fns';
import { generateId, formatDateForDatePicker } from './todoList';

export default class Todo {
    constructor(name, dueDate, id) {
        this.name = name;
        this.dueDate = dueDate;
        this.isComplete = false;
        this.id = id || generateId();
    }
}

export function createDefaultTodos() {
    const yesterdayDate = formatDateForDatePicker(startOfYesterday());
    const todayDate = formatDateForDatePicker(startOfToday());
    const tomorrowDate = formatDateForDatePicker(startOfTomorrow());
    const endOfYearDate = formatDateForDatePicker(endOfYear(startOfToday()));
    const startOfNextYearDate = formatDateForDatePicker(add(endOfYear(startOfToday()), { days: 1 }));

    return [
        new Todo('Pay Bills', yesterdayDate, 'defaultTodo1'),
        new Todo('Grocery Shopping', todayDate, 'defaultTodo2'),
        new Todo('Visit Best Friend', tomorrowDate, 'defaultTodo3'),
        new Todo('Prep for New Years party', endOfYearDate, 'defaultTodo4'),
        new Todo('Write down New Years resolutions', startOfNextYearDate, 'defaultTodo5')
    ];
}