let todos = [];



function addTodo(todo) {
    const foundedId = todos.find(t => t.id === todo.id);
    if (todo instanceof Todo && !foundedId) {
        todos.push(todo);
        return;
    }

    if (foundedId) {
        throw new Error('todo with this id already exists');
        return;
    }
    throw new Error('invalid argument');

}

function removeTodoById(id) {
    const removedTodo = todos.find(el => el.id === id);
    if (removedTodo) {
        const index = todos.indexOf(removedTodo);
        todos.splice(index, 1);
    } else {
        throw new Error(`Todo with id: ${id} not found`);
    }
}


function removeLastTodo() {
    let lastTodoIndex = todos.length - 1;
    todos.splice( lastTodoIndex, 1);
}

function editTodo(id, todoUpdate) {
    let editTodo = todos.find(el => el.id === id);
    if (editTodo) {
        editTodo = {...todoUpdate, id: editTodo.id};
    }else {
        throw new Error(`Todo with id: ${id} not found`);
    }
}

function clearTodoList() {
    todos = [];
}

function getTodosList() {
    return [...todos];
}

class Todo {
    id;
    title;
    constructor(title, id) {
        this.title = title;
        this.id = id;
    }

    getTitle() {
        return this.title;
    }
}
