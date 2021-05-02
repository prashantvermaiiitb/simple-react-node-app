/**
 * Getting thr proper index of the person object
 * @param {*} todoIndex : index of the todo
 * @param {*} personStore : person store
 * @returns 
 */
export function getPersonIndex(todoIndex, personStore) {
    let maxPersonIndex = personStore.length - 1; // because in array index is less than or equal to length
    /**
       * get the index of todo
       * get the count of the persons
       * todoIndex < personIndex assgin that
       * todoIndex % personIndex assing that to the remainder
       */
    return todoIndex <= maxPersonIndex ? todoIndex : (todoIndex % maxPersonIndex);
}

export function assignTodo(todo, todoStore, personStore) {
    //! this is incorrect implementation because this should be controlled at the Todo level
    let personIndex = getPersonIndex(todo.id, personStore);
    todoStore.assignTodoAction(todo.id, personStore[personIndex]);
}

/**
 * Assigning todos to the Person objects
 * @param {*} todoStore 
 */
export function assignTodos(todoStore, personStore) {

    // todoStore.assignTodoAction(personStore)
    todoStore.todos.forEach(todo => {
        // let personIndex = getPersonIndex(todo.id, personStore);
        // todoStore.assignTodoAction(todo.id, personStore[personIndex]);
        assignTodo(todo, todoStore, personStore);
    });
}