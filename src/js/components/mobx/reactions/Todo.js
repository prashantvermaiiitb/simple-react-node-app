import { observer } from 'mobx-react';
import React, { useState } from 'react';
import * as Utils from '../utils/utils';

/**
 * Simple Todo component for showing the Todo data on the screen.
 */
const Todo = observer(({ todo, personStore }) => {
    // console.log(todo);
    const [assignee, setAssignee] = useState(false);
    /**
     * Changing the state of the Todo
     */
    const onToggleCompleted = () => {
        todo.completed = !todo.completed;
        // todo.updateTodoStatusAction(); //! uncomment this to remove the warnings coming while updating the status
    }
    /**
     * renaming the todo
     * todo: this should be done in the action else warnings are coming in the console
     */
    const onRename = () => {
        let newName = prompt('Task name', todo.name) || todo.name;
        todo.updateTodoNameAction(newName);// todo: Not using an action will generate the warning!!
    }
    /**
     * Updating the assignee for the todo
     * @param {*} event 
     */
    const onAssigneeUpdate = (event) => {
        // console.log('help in updating the assignee');
        if (!assignee) {
            setAssignee(true);
        } else {
            // console.log('event.target.value', event.target.value); //string 
            let newAssigneeIndex = Number(event.target.value); // need conversion
            Utils.assignTodoToPerson(todo, personStore.find(person => person.id === newAssigneeIndex));
            setAssignee(false);
        }
    }
    return (
        <>
            <input
                type='checkbox'
                defaultChecked={todo.completed} //! defaultChecked to be used for the initial value of the checkbox
                onChange={onToggleCompleted}></input>
            <span onDoubleClick={onRename}>{todo.name}</span>
            { todo.assignee && !assignee
                ? <small onDoubleClick={onAssigneeUpdate}>({todo.assignee.name})</small>
                : null
            }
            {assignee && <select
                onChange={onAssigneeUpdate}
                value={todo.assignee.id}>
                {personStore.map(person => <option key={person.id} value={person.id}>{person.name}</option>)}
            </select>}
        </>
    );
});
export default Todo;