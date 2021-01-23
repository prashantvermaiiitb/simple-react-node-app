/**
 * Here we will ask user to do something say enter some text.
 * After that if user changes the location by clicking or by typing 
 * then we will prompt the user about that.
 */
import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    Prompt
} from "react-router-dom";
import { generateNavLinksFromConfig, generateRoutesFromConfig } from '../../utils/utils';
/**
 * Page configuration
 */
const pageConfig = [
    { path: '/', name: 'Form', component: BlockingForm },
    { path: '/one', name: 'One', render: (props) => { return <h3>One</h3> } },
    { path: '/two', name: 'Two', render: (props) => { return <h3>Two</h3> } },
];
const PromptUser = () => {
    // const { url } = useRouteMatch();
    const { url: baseUrl } = useRouteMatch();
    return (
        <Router>
            {generateNavLinksFromConfig({ config: pageConfig, baseUrl })}

            <Switch>
                {/* {generateRoutesFromConfig({ config: pageConfig, baseUrl })} */}
                <Route path={`${baseUrl}/`} exact children={<BlockingForm />} />
                <Route path={`${baseUrl}/one`} children={<h3>One</h3>} />
                <Route path={`${baseUrl}/two`} children={<h3>Two</h3>} />
            </Switch>
        </Router>
    );
}
/**
 * Form that will allow user to type-in then submit 
 * Prompt in that will be used for this purpose. 
 */
function BlockingForm() {
    let [isBlocking, setIsBlocking] = useState(false);

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                // console.log('target inside form ', event.target); // this will be the form
                // The reset() method resets the values of all elements in a form (same as clicking the Reset button).
                event.target.reset();
                setIsBlocking(false);
            }}
        >
            <Prompt
                when={isBlocking}
                message={location =>
                    `Are you sure you want to go to ${location.pathname}`
                }
            />

            <p>
                Blocking?{" "}
                {isBlocking ? "Yes, click a link or the back button" : "Nope"}
            </p>

            <p>
                <input
                    size="50"
                    placeholder="type something to block transitions"
                    onChange={event => {
                        setIsBlocking(event.target.value.length > 0);
                    }}
                />
            </p>

            <p>
                <button>Submit to stop blocking</button>
            </p>
        </form>
    );
}

export default PromptUser;