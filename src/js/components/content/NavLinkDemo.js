import React from 'react';
import { BrowserRouter as Router, Route, NavLink, useRouteMatch } from 'react-router-dom'

const NavLinkDemo = () => {
    const { url } = useRouteMatch();
    return (
        <>
            <Router basename={url}>
                <ul>
                    <li><NavLink to="/faq?eventID=123" isActive={(match, location) => {
                        if (!match) {
                            return false;
                        }

                        // only consider an event active if its event id is an odd number
                        /**
                         * @todo not able to get the params here from the match object ??
                         https://reactrouter.com/web/api/NavLink
                         */
                        // let eventID = parseInt(match.params.eventID, 10);
                        // console.log('eventId..', match);

                        const searchParams = new URLSearchParams(location.search);
                        // console.log(searchParams);

                        //https://www.oreilly.com/library/view/react-router-quick/9781789532555/44a5b35c-3fbd-4dec-b873-91618b17bd15.xhtml    
                        const eventID = searchParams.get('eventID');
                        return !isNaN(eventID) && eventID % 2 === 1;
                    }} >faq 123</NavLink></li>
                </ul>
            </Router>
        </>
    );
}

export default NavLinkDemo;