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
/**
 * Assign todo to a person object 
 * @param {*} todo 
 * @param {*} person 
 */
export function assignTodoToPerson(todo, person) {
    todo.assignTodoAction(person);
}

/**
 * Assign Todo moved inside the Todo object
 * @param {*} todo 
 * @param {*} personStore 
 */
export function assignTodo(todo, personStore) {
    let personIndex = getPersonIndex(todo.id, personStore);
    assignTodoToPerson(todo, personStore[personIndex]);
}

/**
 * Assigning todos to the Person objects
 * @param {*} todoStore 
 */
export function assignTodos(todoStore, personStore) {
    todoStore.todos.forEach(todo => {
        assignTodo(todo, personStore);
    });
}