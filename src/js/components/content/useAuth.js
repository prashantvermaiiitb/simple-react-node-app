import React, { createContext, useState, useContext } from 'react';
import { BrowserRouter as Router, Route, NavLink, useRouteMatch, Redirect, useHistory, useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.


/**
 * Here we are 
 * 1. creating the context using createContext()
 * 2. Providing the context to the entire tree by encapsulating the entire component tree in Provider
 * 3. Providing the 'Auth' component to all the component using context
 * 4. useAuth() will be used in all the component to get the information at different level like 
 * in redux we are using connect() function.
 */

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

/**
 * Component to give login / logout functionality
 * and maintain the user state. This should be available to all the components.
 */
function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = cb => {
        return fakeAuth.signin(() => {
            setUser("user");
            cb();
        });
    };

    const signout = cb => {
        return fakeAuth.signout(() => {
            setUser(null);
            cb();
        });
    };

    return {
        user,
        signin,
        signout
    };
}

/**
 * Creating context to make certain information available at all the levels.
 */
const authContext = createContext();

/**
 * Wrapper for passing the authentication information to the child components
 * @param {*} param0 
 */
function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    const hello = { user: 'user' }; //custom JS object passed for testing.
    const { url: homePageUrl } = useRouteMatch();
    return (
        <authContext.Provider value={{ auth, hello, homePageUrl }}>
            {children}
        </authContext.Provider>
    );
}

/**
 * Using context object outside the 
 * component tree
 */
function useAuth() {
    return useContext(authContext);
}

/**
 * protected page for the Demo
 */
const ProtectedPage = () => {
    return (
        <div style={{ padding: 10, margin: 10 }}>
            <span>This is protected Page.</span>
        </div>
    )
};

/**
 * Login component
 */
const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();

    let { from } = location.state || { from: { pathname: "/" } };

    let login = () => {
        auth.auth.signin(() => {
            history.replace(from);
        });
    };
    return (
        <div style={{ padding: 10, margin: 10 }}>
            <span>You must Login to see this page</span>
            <br />
            <br />
            <br />
            <button onClick={login}>Login</button>
        </div>
    )
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated over the PROTECTED Page.
function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.auth.user ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

/**
 * This will be shown on the top of all the route.
 */
function AuthButton() {
    let history = useHistory();
    let auth = useAuth();

    return auth.auth.user ? (
        <p>
            Welcome!{" "} {auth.hello.user}
            <button
                onClick={() => {
                    auth.auth.signout(() => history.push(auth.homePageUrl));
                }}
            >
                Sign out
        </button>
        </p>
    ) : (
            <p>You are not logged in.</p>
        );
}

/**
 * Authentication example
 */
const useAuthDemo = () => {
    const { url } = useRouteMatch();
    return (
        <ProvideAuth>
            <ScrollToTop />
            <AuthButton />
            <Router basename={url}>
                <ul>
                    <li><NavLink to="/public">Public Page</NavLink></li>
                    <li><NavLink to="/protected">Protected Page</NavLink></li>
                </ul>
                {/* <Route path="/">
                    <Redirect to='/public' />
                </Route> */}
                <Route path="/public" component={(props) => <h3>Public page (free to open).</h3>} />
                <PrivateRoute path="/protected">
                    <ProtectedPage />
                </PrivateRoute>
                <Route path="/login" component={Login} />
            </Router>
        </ProvideAuth>
    );
};

export default useAuthDemo;