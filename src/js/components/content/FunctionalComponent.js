import React, { Component } from 'react';

const FunctionalDemo = ({ loader }) => {
    // console.log('loader inside functional demo',loader);
    return (
        <div>
            {loader ? <h2>loader</h2> : <h2>Unloader</h2>}
        </div>
    );
};


class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log(1);
        this.setState({ loading: !this.state.loading });
    }
    handleClick2(id) {
        console.log(id);
        this.setState({ loading: !this.state.loading });
    }
    render() {
        // console.log('inside render for the Demo component');
        return (
            <>
                <FunctionalDemo loader={this.state.loading} />
                <button onClick={this.handleClick}>Click Me!!</button>
                <button onClick={this.handleClick2.bind(this, 2)}>Click Me-2!!</button>
                <button onClick={() => {
                    console.log(3);
                    this.setState({ loading: !this.state.loading });
                }}>Click Me-3!!</button>
            </>
        );
    }
}

export default Demo;