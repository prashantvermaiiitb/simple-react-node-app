import React, { Component, useContext } from 'react';

const todoList = ['prashant', 'adhrit',
    'aditi', 'pratibha', 'shiva'
];
const TodoListContext = React.createContext(todoList);

/**
 * function component accessing the context. 
 */
class TodoList extends Component {
    /**
     * ! check the usage of the Context here how we are 
     * ! using that.
     */
    static todoList = TodoListContext;
    render() {
        return (
            <>
                <h2>Class component accessing the context</h2>
                <ul>
                    {todoList.map((value, index) => <li key={index}>{value}</li>)}
                </ul>
            </>
        );
    }
}

/**
 * functional component accessing the context.
 */
const TodoListFc = () => {
    /**
     * ! for this to happen we have to pass the value={} attribute in the provider.
     */
    const [todoList] = useContext(TodoListContext);
    return (
        <>
            <h2>Simple function component accessing context</h2>
            <ul>
                {todoList.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
        </>
    );
}


/**
 * value={[todoList]} : is needed to be used in the functional component so we need that 
 */
const TodoApp = () => {
    return (
        <TodoListContext.Provider value={[todoList]}>
            <TodoList />
            <br />
            <TodoListFc />
        </TodoListContext.Provider>
    );
}

export default TodoApp;