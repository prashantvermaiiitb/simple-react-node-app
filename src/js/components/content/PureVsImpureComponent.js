import React from 'react';
import ImpureComponent from './ImpureComponent';
import PureComponent from './PureComponent';
import WithBorder from '../higher-order-components/WithBorder';

/**
 * Simple HOC returning proper component what you want to display on the screen.
 * @param {*} Component 
 * @param {*} isPure 
 */
const Wrapper = (Component, isPure) => {
    return function (props) {
        return (
            <React.Fragment>
                <div style={{ margin: 10, padding: 10 }}>Render method for this component will be called {isPure ? 'once !!' : 'everytime'}. Please check console.</div>
                <Component />
            </React.Fragment>
        );
    }
}

/**
 * HOC(s) called on top of other HOC
 */
const ImpureHoc = WithBorder(Wrapper(ImpureComponent), {
    border: "1px solid #00bcd4",
    marginBottom: 5,
});

const PureHoc = WithBorder(Wrapper(PureComponent, true), {
    border: "1px solid #00bcd4",
    marginBottom: 5,
});

/**
 * Component to show the Pure Vs Impure Implementation inside the react.
 */
const PureVsImpureDemo = () => {
    return (
        <div>
            <ImpureHoc />
            <PureHoc />
        </div>
    );
}

export default PureVsImpureDemo;