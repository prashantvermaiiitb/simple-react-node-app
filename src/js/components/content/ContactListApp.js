import React, { Component } from 'react';
import ContactList from './ContactList';

/**
 * * Contact List loader. 
 * * This is the main App that will make the XHR request for the page.
 * * This will have the component that will load / show the data.
 */
class ContactListApp extends Component {
    constructor(props) {
        super(props);
        this.state = { contacts: [] };
    }
    componentDidMount() {
        // console.log('contact list component did mount');
        fetch('https://api.randomuser.me/?nat=us.gb&results=10')
            .then(response => response.json())
            .then(parsedResponse => parsedResponse.results.map(user => ({
                name: `${user.name.title} ${user.name.first} ${user.name.last}`,
                email: user.email,
                thumbnail: user.picture.thumbnail
            })))
            .then(contacts => this.setState({ contacts }));
    }
    render() {
        // console.log('render contact List app');
        return (
            <div>
                <ContactList contacts={this.state.contacts} />
            </div>
        );
    }
}

export default ContactListApp;