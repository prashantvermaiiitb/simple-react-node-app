import React, { useEffect, useState } from 'react';

const Todo = ({ title, completed }) => {
    return (<li>{title}</li>);
}

/**
 * This component will be lazy loaded.
 */
const OtherComponent = () => {

    const [message, setMessage] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => { console.log(json); setMessage(json); })
    }, []);

    return (
        <>
            <h1>Hello World!!!</h1>
            <span>This should be lazy loaded...</span>
            <ul>
                {message !== null && message.map((value, index) => {
                    return <Todo key={`${value.userId}_${value.id}`} {...value} />
                })}
            </ul>
        </>

    );
}

export default OtherComponent;