import React, { lazy, Suspense,useState } from 'react';
import ScrollToBottom from '../content/ScrollToBottom';
const OtherComponent = lazy(() => import('./OtherComponent'));

/**
 * My component demo.
 * This can be tested on the slow 3G network.
 */
function MyComponent() {

    const [DynamicModule, setDynamicModule] = useState(null);

    const handleClick = () => {
        import('./OnClickComponent').then((OnClickComponent) => {
            // Use moduleA
            try{
                /**
                 * !Important learning :-
                 * * we are returning module with 'export default' included in that 
                 * * as a result we have to use '.default()' to get the "React Element"
                 * * i.e. we have the React element while being returned from the 
                 * * module that's imported. Setting this as the state variable so that 
                 * * it can be shown in the DOM.
                 */
                setDynamicModule(OnClickComponent.default());
            }catch(e){
                console.log('errr',e);
            }
            
        })
            .catch(err => {
                // Handle failure
            });
    };


    return (
        <>
            <button onClick={handleClick}>Load</button>
            {/* Here important thing to note is Dynamic module is React Element and we are directly using this here no Triangle instantiation needed here. */}
            {DynamicModule}
            <Suspense fallback={<div>Loading...OtherComponent</div>}>
                <OtherComponent />
            </Suspense>
        </>
    );
}

/**
 * Lazy Load Demo.
 */
const LazyLoadDemo = () => {
    return (
        <>
            <ScrollToBottom />
            <h1>Hello World loaded through lazy load Demo!!</h1>
            <MyComponent />
        </>
    );
}

export default LazyLoadDemo;
