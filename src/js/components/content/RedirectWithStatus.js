import React from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'

const RedirectWithStatus = (props) => {
    const { url } = useRouteMatch();
    const location = useLocation();
    return (
        <Router basename={`${url}`}>
            <Route>
                <Redirect to="/somewhere/else" />
            </Route>
            <Route path="/somewhere/else" children={(props) => {
                let referrer;
                // const { location: { state: { referrer } } = {} } = props; // giving error for the undefined state read.
                const { location: { state } } = props;
                if (state) {
                    referrer = state.referrer;
                }
                // console.log('props in somewhere else :', props);
                return (
                    <div>
                        {referrer ? <h2>You came from Anywhere.</h2> : <Link to={'/anywhere/else'}>Go any where</Link>}
                        <h1>hello from somewhere else</h1>
                        {referrer && <div>Current Hash : {props.location.hash}</div>}
                    </div>
                )
            }} />
            <Route path="/anywhere/else">
                <Redirect to={
                    {
                        pathname: '/somewhere/else',
                        search: '?utm_source=anywhere',
                        hash: 'nailedit',
                        state: {
                            referrer: location
                        }
                    }
                } />
            </Route>
        </Router>
    );
}

export default RedirectWithStatus;