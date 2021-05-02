import { observer } from 'mobx-react';
import React from 'react';

/**
 * Simple Todo component for showing the Todo data on the screen.
 */
const Todo = observer(({ todo }) => {
    // console.log(todo);

    /**
     * Changing the state of the Todo
     */
    const onToggleCompleted = () => {
        todo.completed = !todo.completed;
    }
    /**
     * renaming the todo
     */
    const onRename = () => {
        todo.name = prompt('Task name', todo.name) || todo.name;
    }
    return (
        <>
            <input
                type='checkbox'
                defaultChecked={todo.completed} //! defaultChecked to be used for the initial value of the checkbox
                onChange={onToggleCompleted}></input>
            <span onDoubleClick={onRename}>{todo.name}</span>
            { todo.assignee
                ? <small>({todo.assignee.name})</small>
                : null
            }
        </>
    );
});
export default Todo;