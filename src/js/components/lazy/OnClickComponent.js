import React from 'react';
import WithBorder from '../higher-order-components/WithBorder';
import OtherComponent from './OtherComponent';

/**
 * Wrapping another component inside this component.
 */
const OnClickComponent = () => {
    return (
        <>
            <h1>Should be loaded on the click of the button</h1>
            <OtherComponent/>
        </>
    );
};

export default WithBorder(OnClickComponent);