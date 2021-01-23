import React, { useEffect } from 'react';
import { useRouteMatch, NavLink } from 'react-router-dom';
import NestedComponents from '../nestedcomponents';
import ProgramaticRouter from '../programatic-routing/ProgramaticRouter';
import { generateNavLinksFromConfig, generateRoutesFromConfig } from '../../utils/utils';
import CustomLinkExample from '../content/CustomLink';
import PromptUsage from '../content/PromptUsage';
import WithBorder from '../../components/higher-order-components/WithBorder';
import NoMatchExample from '../content/NoMatchExample';
import RecursivePathMatch from '../content/RecursivePathMatch';
import SidebarExample from '../content/SideBar';
import AnimationExample from '../content/AnimationExample';
import RouteConfigExample from '../content/RouterConfigExample';
import ModalGalleryExample from '../content/ModalGalleryExample';
import QueryParamsExample from '../content/QueryParamsExample';
import RedirectWithStatus from '../content/RedirectWithStatus';
import MultiplePathDemo from '../content/MultiplePathDemo';
import MatchPathExample from '../content/MatchPathExample';
import ScrollToTopOnMount from '../content/ScrollToTop';
import NavLinkDemo from '../content/NavLinkDemo';
import CodeSplitExample from '../content/CodeSplitExample';
import PromptDemo from '../content/PromptDemo';
import GeneratePathDemo from '../content/GeneratePathDemo';
import ShowTheLocation from '../content/ShowTheLocation';
import SwitchDemo from '../content/SwitchDemo';
/**
 * Navigation for setting up the context for the Router related 
 * functionalities.
 * 
 * From : https://reactrouter.com/core/api/Route/component
 *
 * Component:-
 * ----------
 * When you use component (instead of render or children, below) the router uses 
 * React.createElement to create a new React element from the given component. 
 * That means if you provide an inline function to the component prop, you would 
 * create a new component every render. This results in the existing component unmounting 
 * and the new component mounting instead of just updating the existing component. 
 * When using an inline function for inline rendering, use the render or the children prop (below).
 * 
 * Render:-
 * -------
 * This allows for convenient inline rendering and wrapping without the undesired remounting explained above.
 * Instead of having a new React element created for you using the component prop, you can pass in a function 
 * to be called when the location matches. The render prop function has access to all the same route props 
 * (match, location and history) as the component render prop.
 *
 * Warning: <Route component> takes precedence over <Route render> so don’t use both in the same <Route>.
 * 
 * Children:-
 * --------
 * Sometimes you need to render whether the path matches the location or not. 
 * In these cases, you can use the function children prop. It works exactly like render except that 
 * it gets called whether there is a match or not.The children render prop receives all the same route 
 * props as the component and render methods, except when a route fails to match the URL, then match is null. 
 * This allows you to dynamically adjust your UI based on whether or not the route matches. 
 * Here we’re adding an active class if the route matches
 * 
 * Warning: 
 * <Route children> takes precedence over both <Route component> and <Route render> so don’t use more than one in the same <Route>. 
 * 
 */

let pageConfig = [
    { path: '/nestedcomponent', name: 'Nested Components', component: WithBorder(NestedComponents, null, 'Sample Nested Component Example.') },

    { path: '/programatic-routing', name: 'Programatic Routing', component: ProgramaticRouter },
    {
        path: '/programatic-routing-component-as-function',
        name: 'Programatic Routing (Comp. as func.)',
        component: (props) => {
            return <div>
                <span style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 10, display: 'block' }}>Component as function</span>
                <br /><ProgramaticRouter {...props} /></div>
        }
    },

    {
        path: '/render-example',
        name: 'Render Usage',
        render: (props) => {
            const Hello = function (props) {
                useEffect(() => {
                    console.log('hello Component (render usage Prop) mounted!!');
                    return () => {
                        //this will not be called because this is being mounted once and used again and again
                        console.log('hello component (render usage prop) unmounted!!');
                    }
                }, []);
                const HocWrapper = WithBorder(NestedComponents);
                return <HocWrapper {...props} msg="calling from render prop" />
            }
            return <Hello {...props} />
        }
    },
    {
        path: '/priority-example',
        name: 'component,render,children Priority',
        //@todo try commenting them one by one and see
        children: (props) => {
            return <h1>Children component priority-3</h1>
        },
        component: (props) => {
            return <h1>Children component priority-1</h1>
        },
        render: (props) => {
            return <h1>render props priority-2</h1>
        }
    },
    { path: '/custom-link', name: 'Custom Link', component: CustomLinkExample },
    { path: '/prompt-usage', name: 'Prevent user transition (Prompt Usage)', component: PromptUsage },
    { path: '/no-match-redirect', name: 'Redirect With No-match', component: NoMatchExample },
    { path: '/recursive-path', name: 'Recursive paths', component: RecursivePathMatch },
    { path: '/route-config', name: 'Display (2 Comp. / 1 Route)', component: SidebarExample },
    { path: '/transitions', name: 'Transitions', component: AnimationExample },
    { path: '/route-config-2', name: 'Use JSON Route Config', component: RouteConfigExample },
    { path: '/gallery-demo', name: 'Gallery', component: ModalGalleryExample },
    { path: '/query-params', name: 'Query parameters', component: QueryParamsExample },
    { path: "/redirect-with-status", name: "Redirect with status", component: RedirectWithStatus },
    { path: "/multiple-path", name: "Multiple-Path 1 Component Demo", component: MultiplePathDemo },
    { path: "/match-path", name: "Match-Path Demo", component: MatchPathExample },
    { path: "/scroll-restoration", name: "scroll restoration", component: ScrollToTopOnMount },
    { path: "/nav-link-attributes", name: "NavLink Attribute Types", component: NavLinkDemo },
    { path: "/path-match", name: "generate and match path", component: GeneratePathDemo },
    { path: "/with-router", name: "With Router usage", component: ShowTheLocation },
    { path: "/switch-demo", name: "Switch Usage", component: SwitchDemo },



    {
        path: '/children-example',
        name: 'Children Usage',
        children: (props) => {
            const Hello = function (props) {
                useEffect(() => {
                    console.log('hello Component (children Prop) mounted!!');
                    return () => {
                        console.log('hello component (child prop) unmounted!!');
                    }
                }, [])
                return <h3 style={{ padding: '10px', fontFamily: 'monospace', fontSize: '14px' }}>hello from 'children',<br /> will be rendered in all the Routes. {props.match ? <span><br />{`path information will be present when there is a path match : ${JSON.stringify(props.match)}`}</span> : ''}</h3>;
            }
            const HocWrapper = WithBorder(Hello);
            return <HocWrapper {...props} msg="calling from children prop" />
        }
    },

    { path: '/useAuth', name: 'UseAuth', component: NestedComponents },
    { path: '/static-router', name: 'Static Router', component: NestedComponents },
    { path: '/static-context', name: 'Context Passing', component: NestedComponents },
    { path: "/code-splitting", name: "Code Splitting", component: CodeSplitExample },
    { path: "/prompt", name: "User prompt", component: PromptDemo },

    { path: "/responsive-ui", name: "responsive user-interfaces" },
    // { path: "/type-of-routers", name: "Router Types" },
    // { path: "/history-object", name: "History Object" },
    // { path: "/match-object", name: "Match Object" },
    // { path: "/location-object", name: "Location Object" },
    // { path: "/relative", name: "Relative Path Demo" },
    { path: "/passing-object", name: "Passing Object in 'to'" },
    // { path: "/passing-state-location", name: "Passing state in location" },
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