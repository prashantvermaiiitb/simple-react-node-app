import React from 'react';
import WithLoader from '../higher-order-components/WithLoader2';

/**
 * Printing the contact for a particular person.
 * @param {*} param0 
 */
const Contact = ({ contact }) => {
    const { name, email, thumbnail } = contact;
    // // // // // // console.log("Contact -> name, email, thumbnail", name, email, thumbnail);
    return (
        <div style={{ display: 'flex', marginBottom: 5 }}>
            <div><img src={thumbnail} /></div>
            <div style={{ marginLeft: 10 }}>
                <span>{name}</span>
                <div>{email}</div>
            </div>
        </div>
    );
}

/**
 * Contact list for printing the list of the contacts.
 * This is a dependent component and this will be wrapped in the layers.
 * @param {*} param0 
 */
const ContactList = ({ contacts }) => {
    // // // // // // console.log("ContactList -> contacts", contacts)
    //? should n't this be moved to the HOC 
    // if (contacts !== null && contacts.length === 0) {
    //     return <h3>Loading contacts</h3>
    // }

    return (
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {contacts.map(contact => <li key={contact.email}><Contact contact={contact} /></li>)}
        </ul>
    )
}

export default WithLoader('contacts')(ContactList);