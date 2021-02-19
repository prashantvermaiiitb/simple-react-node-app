import React from 'react';
/**
 * component to show the usage for the dangerously set inner html.
 * XSS attacks are feasible because you are putting HTML directly without checks.
 */



const MyComponent = ({ name, address }) => (
    <div>
        <h2>{name}</h2>
        {address &&
            <p>{address}</p>
        }
    </div>
)

const DangerHtml = () => {
    return (
        <>
            <MyComponent name="prashant" />
            <div dangerouslySetInnerHTML={{ __html: '<h2>this is dangerous html</h2>' }}></div>
        </>
    )
}

export default DangerHtml;