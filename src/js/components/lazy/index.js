import React, { lazy, Suspense } from 'react';
import ScrollToBottom from '../content/ScrollToBottom';
const OtherComponent = lazy(() => import('./OtherComponent'));

/**
 * My component demo.
 * This can be tested on the slow 3G network.
 */
function MyComponent() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent />
        </Suspense>
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
