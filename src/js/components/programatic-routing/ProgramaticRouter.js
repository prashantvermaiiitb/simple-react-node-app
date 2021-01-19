/**
 * Components to show what can be done using programatic routing.
 * Idea is to catch hold-off history API. 
 * 1) withRouter
 * 2) Route
 * 3) Context API
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router-dom';

/**
 * Using With Router HOC for the History API access
 */
const WithRouterButton = withRouter(({ history }) => (<button
    type='button'
    onClick={() => { history.push('/') }}
>
    Click Me (WithRouter)! </button>
));

/**
 * Using Route for accessing History API
 */
const RouteButton = () => (
    <Route render={({ history }) => (
        <button
            type='button'
            onClick={() => { history.push('/new-location') }}
        >
            Click Me (As Route returned)!
        </button>
    )} />
);

/**
 * Context API usage for the routing.
 * @param {*} props 
 * @param {*} context 
 */
const ContextButton = (props, context) => (<button
    type='button'
    onClick={() => {
        // context.history.push === history.push
        context.history.push('/new-location')
    }}
>
    Click Me (Context Button)!
</button>)

// you need to specify the context type so that it // is available within the component 
ContextButton.contextTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
}
/**
 * Will be presenting you the button that can lead to the history api push
 */
const ProgramaticRouting = () => {
    return (
        <React.Fragment>
            <WithRouterButton />
            <br />
            <br />
            <RouteButton />
            <br />
            <br />
            <ContextButton />
        </React.Fragment>
    );
}

export default ProgramaticRouting;