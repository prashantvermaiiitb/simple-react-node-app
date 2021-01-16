import React from 'react';
import { useParams, useRouteMatch, Link, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import './router.css';
/**
 * Component to show the Hooks usage for the route matching.
 */
function Topics() {
    let match = useRouteMatch();
    console.log(match);
    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <NavLink activeClassName="active" to={`${match.url}/components/1`}>Components</NavLink>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/redirect`}>
                        Redirect Test
                    </Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/redirect`} exact component={RedirectComponent} />
                <Route path={`${match.path}/:topicId/:number`} component={TopicClass}>
                </Route>
                <Route path={`${match.path}/:topicId`}>
                    <TopicFunction />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}
/**
 * This will be the level-3 code base to be accessed.
 */
function TopicFunction(props) {
    console.log('blank props object...', props); // this not getting printed when being used with <Topic/> as inner child
    console.log('params object ... ', useParams());
    let { topicId } = useParams();//de-structuring happened here 
    return <h3>Requested topic ID: {topicId}</h3>;
}


/**
 * <Route path={`${match.path}/:topicId`} component={Topic}>
 * When being called as above then this.props are being filled up.
 * {"history":{"length":50,"action":"PUSH","location":{"pathname":"/topics/components","search":"",
 *  "hash":"","key":"ce595u"}},"location":{"pathname":"/topics/components","search":"","hash":"",
 * "key":"ce595u"},"match":{"path":"/topics/:topicId","url":"/topics/components","isExact":true,"params":
 * {"topicId":"components"}}}
 */
class TopicClass extends React.Component {
    render() {
        console.log('Props object from class ', this.props); // this not getting printed when being used with <Topic/> as inner child
        return <h3>Requested topic ID: {this.props.match.params.topicId}</h3>;
    }
}
/**
 * redirect component testing.
 */
const RedirectComponent = () => {
    return (
        <Redirect to="/new-link-to-be-processed" />
    );
}

export default Topics;