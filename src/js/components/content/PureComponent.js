import React from 'react';
/**
 * This is an example of the Pure Component Pure component will render the same
 * output irrespective of state / props changes. 
 * React will optimise the rendering for this Component.
 */
export default class PureComponent extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            counter: 0
        }

        // The value of Counter is updated to same value during continues interval

        let myTimer = setInterval(() => {
            this.setState({
                counter: 0
            });
        }, 1000);

        setTimeout(() => {
            console.log('Clearing the timer function for the Pure component!!')
            clearInterval(myTimer);
        }, 5000);
    }

    render() {
        console.log('Render function called everytime for this Pure component!!');
        return <b style={{ padding: 10, display: 'block' }}>Pure Component Counter Value: {this.state.counter}</b>
    }
}