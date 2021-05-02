import React from 'react';
import ScrollToBottom from '../content/ScrollToBottom';
import { initiateStores } from './actions/index';

import TodoList from './reactions/TodoList';

/**
 * Simple example of the mobx todo application
 * Need 
 * 1. mobx
 * 2. mobx-react
 * as the dependencies for the project.
 * @returns 
 */
const MobxToDoApp = () => {
    let store = initiateStores();

    // console.log("🚀 ~ file: index.js ~ line 15 ~ MobxToDoApp ~ stores", store)

    return (
        <>
            <React.Suspense fallback={<h1>Loading profile...</h1>}>
                <ScrollToBottom />
                <h1>Simple example of the Mobx To do App.</h1>

                <TodoList store={store} />
            </React.Suspense>
        </>
    );
}
``
export default MobxToDoApp;