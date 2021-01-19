import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import NestedComponents from '../nestedcomponents';
import ProgramaticRouter from '../programatic-routing/ProgramaticRouter';
import { generateNavLinksFromConfig, generateRoutesFromConfig } from '../../utils/utils';
import WithBorder from '../../components/higher-order-components/WithBorder';
/**
 * Navigation for setting up the context for the Router related 
 * functionalities.
 */
let pageConfig = [
    { path: '/nestedcomponent', name: 'Nested Components', component: NestedComponents },
    { path: '/programaticrouting', name: 'Programetic Routing', component: ProgramaticRouter },
    { path: '/useAuth', name: 'UseAuth', component: NestedComponents },
    { path: '/custom-link', name: 'Custom Link', component: NestedComponents },
    { path: '/prevent-user-link', name: 'Prevent user transition', component: NestedComponents },
    { path: '/no-match-redirect', name: 'Redirect With No-match', component: NestedComponents },
    { path: '/recursive-path', name: 'Recursive paths', component: NestedComponents },
    { path: '/route-config', name: 'Use JSON Route Config', component: NestedComponents },
    { path: '/route-config-2', name: 'Use JSON Route Config', component: NestedComponents },
    { path: '/transitions', name: 'Transitions', component: NestedComponents },
    { path: '/gallery', name: 'Gallery', component: NestedComponents },
    { path: '/static-router', name: 'Static Router', component: NestedComponents },
    { path: '/query-params', name: 'Query parameters', component: NestedComponents },
    { path: '/static-context', name: 'Context Passing', component: NestedComponents },
    { path: "/redirect-with-status", name: "Redirect with status" },
    { path: "/match-path", name: "Match-Path Demo" },
    { path: "/code-splitting", name: "Code Splitting" },
    { path: "/scroll-restoration", name: "scroll restoration" },
    { path: "/responsive-ui", name: "responsive user-interfaces" },
    { path: "/type-of-routers", name: "Router Types" },
    { path: "/type-of-links", name: "NavLink Attribute Types" },
    { path: "/prompt", name: "User prompt" },
    { path: "/switch-demo", name: "Switch Usage" },
    { path: "/path-match", name: "generate and match path" },
    { path: "/history-object", name: "History Object" },
    { path: "/match-object", name: "Match Object" },
    { path: "/location-object", name: "Location Object" },
    { path: "/with-router", name: "With Router usage" },
    { path: "/relative", name: "Relative Path Demo" },
    { path: "/passing-object", name: "Passing Object in 'to'" },
    { path: "/passing-state-location", name: "Passing state in location" },
    { path: "/custom-location-match", name: "Custom location match" },
];


/**
 * Generating the Navigation Links for the Route Match.
 */
export default () => {
    const { url: baseUrl } = useRouteMatch();

    // console.log(baseUrl);
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '35%' }}>
                {generateNavLinksFromConfig({ config: pageConfig, baseUrl })}
            </div>
            <div style={{ border: '1px solid #cacaca', padding: 10, margin: 10, width: '65%' }}>
                {/* <Route path={`${baseUrl}/nestedcomponent`}><NestedComponents /></Route> */}
                {/* <Route path={`${baseUrl}/nestedcomponent`} component={NestedComponents}></Route> */}
                {
                    generateRoutesFromConfig({ config: pageConfig, baseUrl })
                }
                {/* <Route path={`${baseUrl}/nestedcomponent`} render={() => <NestedComponents />}></Route> */}
            </div>

        </div>
    );
}