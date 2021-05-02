import TodoStore from '../store/Todos';
import { PersonStore as personStore } from '../store/Person';
import * as Utils from '../utils/utils';
import { action } from 'mobx';


/**
 * Loading Sample Todos from the 
 * @param {*} todoStore 
 */
function addSampleTodos(todoStore) {

    // setTimeout(action(() => {
    //     todoStore.addToDoAction({ name: 'buy milk' });
    //     todoStore.addToDoAction({ name: 'buy eggs', completed: true });
    //     todoStore.addToDoAction({ name: 'buy bread' });
    //     todoStore.addToDoAction({ name: 'get ration' });
    //     todoStore.addToDoAction({ name: 'eat choclate' });
    // }), 3000);

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => json.forEach(todoJson => {
            todoStore.addToDoAction({ name: todoJson.title, completed: todoJson.completed });
        }))

}

/**
 * Create objects for the stores
 * Adding the sample todos in the Todo Store, for person the values are already there.
 * Assigning the todos to the Person object from the person store
 */
export function initiateStores() {
    let todoStore = new TodoStore();
    addSampleTodos(todoStore);
    Utils.assignTodos(todoStore, personStore);
    return { todoStore, personStore };
}