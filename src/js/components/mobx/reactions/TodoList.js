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
        let name = prompt('Task name', '');
        // console.log("🚀 ~ file: TodoList.js ~ line 9 ~ addNewTodo ~ name:", name);
        //!this incorrect implementation has to be corrected
        //!this should be moved to the TODO level.
        if (name.trim().length > 0) {
            let newTodo = todoStore.addToDoAction({ name });
            // let personIndex = Utils.getPersonIndex(newTodo.id, personStore);
            Utils.assignTodo(newTodo, todoStore, personStore);
        }
    };
    return (
        <>
            <button style={{ margin: 5 }} onClick={addNewTodo}>(+)Todo</button>
            <div style={{ backgroundColor: '#cacaca', border: '1px solid #e8e0e0', padding: 5, margin: 5 }}>{todoStore.report}</div>
            <ul>
                {todoStore.todos.map(todo => <li key={todo.id}><Todo todo={todo} /></li>)}
            </ul>
        </>
    );
});

export default TodoList;