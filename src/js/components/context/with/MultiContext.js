/**
 * * idea to show that multiple context exists in the page.
 * * then do the context nesting and accessing the Providers.
 */
import React, { createContext, useContext, Component } from 'react';

const Context1 = createContext('default hello from context-1');
Context1.displayName = 'Disco';
const Context2 = createContext('default hello from context-2');

const Context1Provider = (props) => {
    return (
        <Context1.Provider value={'hello from context-1 from value prop'}>
            {props.children}
        </Context1.Provider>
    );
}

const Context2Provider = (props) => {
    return (
        <Context2.Provider value={'hello from context-2 from value prop'}>
            {props.children}
        </Context2.Provider>
    );
}

/**
 * * check the manner in which context has been assigned and used.
 * ? Shouldn't we using the Provider 
 */
class ContextApp2 extends Component {
    render() {
        return <h2>Context is being assigned using static methods : {this.context}</h2>
    }
}
ContextApp2.contextType = Context1;

/**
 * * Function as child component to be used in the MyContext.Consumer
 */
const ContextApp3 = () => {
    return (
        <Context1.Consumer>
            {value => <h2>Context App3 : {value}</h2>}
        </Context1.Consumer>
    )
}

const Component1 = () => {
    const test_1 = useContext(Context1);
    const test_2 = useContext(Context2);
    return (
        <>
            <h3>Value of the Context1:{test_1}</h3>
            <h3>Value of the Context2:{test_2}</h3>
            <hr />
        </>
    );
}

const App1 = () => {
    return (
        <>
            <div style={{ backgroundColor: '#cacaca' }}>
                <h2>context1 -> context2 -> component</h2>
                <Context1Provider>
                    <Context2Provider>
                        <Component1 />
                    </Context2Provider>
                </Context1Provider>
            </div>
            <div style={{ backgroundColor: '#eaea' }}>
                <h2>context2 -> component</h2>
                <Context2Provider>
                    <Component1 />
                </Context2Provider>
            </div>
            <div style={{ backgroundColor: '#cacaca' }}>
                <h2>context1 -> context2 -> component</h2>
                <Context2Provider>
                    <Context1Provider>
                        <Component1 />
                    </Context1Provider>
                </Context2Provider>
            </div>
            <div style={{ backgroundColor: '#eaea' }}>
                <h2>context2 -> component</h2>
                <Context1Provider>
                    <Component1 />
                </Context1Provider>
            </div>
            <div>
                <ContextApp2 />
            </div>
            <div>
                <h2>function as child component in this </h2>
                <ContextApp3 />
            </div>
        </>
    )
}

const ContextApp = () => {
    return (
        <App1 />
    )
}

export default ContextApp;