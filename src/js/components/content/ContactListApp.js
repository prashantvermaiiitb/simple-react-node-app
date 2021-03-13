import React, { Component } from 'react';
import ContactList from './ContactList';

let timer, startTime = 0;
function throttle(fn, delay) {
    return function (event) {
        if (startTime === 0) {
            startTime = Date.now();
            console.log("throttle -> startTime ->1", startTime);
            timer = setTimeout(function () {
                fn(event.target.value);
                console.log("throttle -> startTime ->2", startTime);
                startTime = 0;
                clearTimeout(timer);
            }, delay);
        }
        return false;
    }
}

/**
 * * Contact List loader. 
 * * This is the main App that will make the XHR request for the page.
 * * This will have the component that will load / show the data.
 */
class ContactListApp extends Component {
    constructor(props) {
        super(props);
        this.state = { contacts: [] };
        this.handleSearch = this.handleSearch.bind(this);
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

    /**
     * ! debouncing and throttling to be implied here ?? 
     * @param {*} e 
     */
    handleSearch(value) {
         // console.log(e.target.value);
         let val = value.toLowerCase();
         let filteredContacts = this.state.contacts.filter(value => value.name.toLowerCase().includes(val));
         // console.log(filteredContacts);
         this.setState({ filteredContacts });
    }
    render() {
        // console.log('render contact List app');
        return (
            <div>
                <ContactList onSearch={throttle(this.handleSearch,1000)} filteredContacts={this.state.filteredContacts} contacts={this.state.contacts} />
            </div>
        );
    }
}

export default ContactListApp;