import React from 'react';

/**
 * Ways to return no html 
 * @param {*} param0 
 */
const NoHtml = ({ option }) => {
    let response = {
        boolean: false,
        nullval: null,
        array: [],
        fragment: <React.Fragment></React.Fragment>,
        fragment1: <></>,
    }
    return (
        <>
            <h2>Options passed : {option}</h2>
            {response[option]}
            {undefined}
        </>
    );
}

const data = { name: 'John', age: 42 }

class User extends React.Component {
    render() {
        return (
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        )
    }
}

class App extends React.Component {
    componentDidMount() {
        this.nameInput.focus()
    }

    render() {
        return (
            <div>
                <input
                    defaultValue={'Won\'t focus'}
                />
                <input
                    ref={(input) => this.nameInput = input}
                    defaultValue={'Will focus'}
                />
            </div>
        )
    }
}


class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: Date.now() }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000)
    }

    componentWillUnmount() {
        console.log('un-mount called for the timer...');
        clearInterval(this.interval)
    }
    render() {
        return (
            <h2>{this.state.time}</h2>
        );
    }
}


/**
 * Demo for the options above 
 */
const NoHtmlDemo = () => {
    return (
        <>
            <NoHtml option={'boolean'} />
            <NoHtml option={'nullval'} />
            <NoHtml option={'array'} />
            <NoHtml option={'fragment'} />
            <NoHtml option={'fragment1'} />
            <User />
            <App />
            <div>{`React version: ${React.version}`}</div>
            {window && window.__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers.entries().next().value[1].version}
            <Timer />
        </>
    )
}

export default NoHtmlDemo;