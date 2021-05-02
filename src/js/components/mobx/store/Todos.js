import { action, autorun, computed, makeObservable, observable } from "mobx";

class Todo {
    // id;
    @observable name;// TS will ensure that it's null or string
    @observable completed; // TS will ensure that it's boolean
    @observable assignee;// TS will ensure that it's null or string
    /**
     * Constructor function
     * @param {*} id 
     * @param {*} name 
     * @param {*} completed 
     * @param {*} assignee 
     */
    constructor({ id, name, completed, assignee }) {
        this.id = id;
        this.name = name;
        this.completed = completed || false;
        this.assignee = assignee || null;
        makeObservable(this);
    }

    /**
     * Updating the name of the todo
     * @param {*} name 
     */
    @action
    updateTodoNameAction(name) {
        this.name = name;
    }
    /**
     * Upating the status of the todo just toggling that
     */
    @action
    updateTodoStatusAction() {
        this.completed = !this.completed;
    }
    /**
    * Assigning todos to the particular Person object
    * @param {*} person 
    * @returns 
    */
    @action
    assignTodoAction(person) {
        this.assignee = person; // assign the reference of the person object in the Todo Object
    }
}

/**
 * Simple Todo Store for the set of Todos
 * Todo : {name , completed, assignee}
 */
class TodoStore {
    currentIndex = 1;
    todos = []; //list of todos 
    pendingTodos = 0; //number of todos that are remaining 

    /**
     * This is add Todo action, will update the todostore.
     * @param {*} param0 : todo value 
     */
    addToDoAction({ name, completed = false, assignee = null }) {
        //Approach#1
        // let todo = { id: this.currentIndex++, name, completed, assignee };
        // this.todos.push(todo);
        // return todo;

        let todo = new Todo({ id: this.currentIndex++, name, completed, assignee });
        this.todos.push(todo);
        return todo;
    }

    /**
     * making the completed Todos as the property so that can be used for 
     * generating the progress of the Tasks.
     */
    get completedTodos() {
        return this.todos.filter(todo => todo.completed).length;
    }
    /**
     * This is a computed report that should be called after each state update automatically.
     * This will return an HTML component
     */
    get report() {
        if (this.todos.length === 0) return 'There are no todos.';
        const nextTodo = this.todos.find(todo => !todo.completed);
        return `Next Todo to be done : ${nextTodo ? nextTodo.name : '<none>'}, with Overall Progress: ${this.completedTodos}/${this.todos.length}`
    }

    /**
     * Constructor function
     */
    constructor() {
        makeObservable(this, {
            todos: observable,
            pendingTodos: observable,
            completedTodos: computed,
            addToDoAction: action,
            report: computed,
            // assignTodoAction: action
        });
        autorun(() => console.log(this.report))
    }
}

export default TodoStore;