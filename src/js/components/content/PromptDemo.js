import React, { useState, useEffect } from 'react';
import { useRouteMatch, NavLink, Prompt } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'


/**
 * Promp Demo
 */
const PromptDemo = () => {
    const { url } = useRouteMatch();
    return (
        <>
            <Router basename={url}>
                <ul>
                    <li><NavLink to={'/prompt-demo-1'}>Prompt Demo-1</NavLink></li>
                    <li><NavLink to={'/app/prompt-demo-2'}>Prompt Demo-2</NavLink></li>
                </ul>
                <Route path="/prompt-demo-1" component={(props) => {
                    const [blocking, setBlocking] = useState(false);
                    useEffect(() => {
                        setTimeout(() => {
                            setBlocking(true);
                        }, 1000);
                    }, []);
                    return (
                        <div>
                            <Prompt
                                when={blocking}
                                message={(location, action) => {
                                    if (action === 'POP') {
                                        console.log("Backing up...")
                                    }

                                    return location.pathname.startsWith("/app")
                                        ? true
                                        : `Are you sure you want to go to ${location.pathname}?`
                                }}
                            />
                        </div>
                    );
                }} />
                <Route path="/app/prompt-demo-2" component={(props) => <h2>Prompt Demo</h2>} />
            </Router>
        </>
    );
}

export default PromptDemo;