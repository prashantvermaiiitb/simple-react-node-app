import { observer } from 'mobx-react';
import React from 'react';
import Todo from './Todo';
import * as Utils from '../utils/utils';

const TodoList = observer(({ store }) => {
    let { todoStore, personStore } = store;
    /**
     * Adding a new Todo to the list 
     * @param {*} e 
     */
    const addNewTodo = function (e) {
        let name = prompt('Enter the new task name below :', '');
        if (name.trim().length > 0) {
            let newTodo = todoStore.addToDoAction({ name });
            Utils.assignTodo(newTodo, personStore);
        }
    };
    /**
     * Showing loader
     */
    if (todoStore.todos.length === 0) {
        return <h1>fetching todos, Please wait....</h1>
    }

    return (
        <>
            <div>
                <button style={{ margin: 5 }} onClick={addNewTodo}>(+)Todo</button>
                {/* <button style={{ margin: 5 }} onClick={addNewTodo}>(+)Persons</button> */}
            </div>
            <div style={{ backgroundColor: '#cacaca', border: '1px solid #e8e0e0', padding: 5, margin: 5 }}>{todoStore.report}</div>
            <ul>
                {todoStore.todos.map(todo => <li key={todo.id}><Todo todo={todo} personStore={personStore} /></li>)}
            </ul>
        </>
    );
});

export default TodoList;