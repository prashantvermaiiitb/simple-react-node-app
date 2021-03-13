import React from 'react';
import ScrollToBottom from '../content/ScrollToBottom';
import './style.css';

/**
 * Contact information component
 * @param {*} param0 
 */
const Contact = ({ ...contactInfo }) => {
    // console.log(contactInfo);
    console.log('render called contact...', contactInfo);
    const { label, value } = contactInfo;
    return (
        <div className="memo-div">
            <span className="label">{label}</span>
            <span className="value">{value}</span>
        </div>
    );
}

/**
 * Simple person object for passing the properties in that.
 * @param {*} param0 
 */
const Person = ({ firstName, lastName }) => {
    console.log('person object render called...', firstName, '-', lastName);
    return (
        <>
            <div>
                <span>{Date.now()}</span>
                <Contact label="firstName" value={firstName} />
                <Contact label="lastName" value={lastName} />
            </div>
        </>
    )
};

/**
 * This will be a wrapper around the Person object and it's not changing
 * By default this will be shall comparison.
 */
const WithMemo = React.memo((props) => {
    return <Person {...props} />
});

/**
 * To get more control over the comparison we can have the custom Equal function.
 * This is mainly to show that memo can fail in-case you return false.
 */
const WithMemoWithEqual = React.memo((props) => {
    return <Person {...props} />
}, (prevProps, nextProps) => {
    return false; // returning the 'false' tell react to re-render 
})

/**
 * Simple Demo for the react Memo.
 */
const MemoDemo = () => {
    return (
        <>
            <ScrollToBottom />
            <Person firstName="martin" lastName="fowler" />
            <WithMemo firstName="john" lastName="judaski" />
            <WithMemoWithEqual firstName="jason" lastName="judaski" />
        </>
    );
}

export default MemoDemo;