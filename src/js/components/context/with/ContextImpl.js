/**
 * * creating sample file to show all the implementations for the context.
 * * this example shows how the provider - consumer both are needed for showing the UI.
 * * else component will not re-render even if it's not being needed.
 */

import React, { createContext, useContext, useState } from 'react';

const alphabetIndexMap = 'abcdefghijklmnopqrstuvwxyz'.split('').map((value, index) => ({ [index]: value }));

const users = [
    { userId: 1, userName: 'john', age: 13 },
    { userId: 2, userName: 'jack', age: 39 },
    { userId: 3, userName: 'jill', age: 78 },
    { userId: 4, userName: 'james', age: 28 },
];

const UserContext = createContext({
    userList: users,
    /**
     * ! this will not work unless you are going to use it via a state in a component.
     * @param {*} user 
     */
    updateUser: function (user) {
        users.push(user);
    }
});

/**
 * User Object for information printing. 
 * @param {*} param0 
 */
const User = ({ user }) => {
    return (
        <li key={user.userId}>{user.userName} has age {user.age}.</li>
    )
}
/**
 * * Consumers do not need the Provider on Top of them they 
 * * are able to get that out from the context itself.
 * ! important to note the name of the 'value' attribute which is userList.
 */
const UserListFromConsumer = ({ inst }) => {
    const getUserName = (userId) => {
        return userId.split('').map((value) => alphabetIndexMap[parseInt(value, 10)][parseInt(value, 10)]).join('');
    }

    console.log('Rendering userList from the Consumer.', inst);
    return (
        <>
            <h2>Rendering UserList from the Consumer instance-{inst}.</h2>
            <UserContext.Consumer>
                {({ userList, updateUser }) => {
                    {/* console.log('userList passed in the consumer', userList); */ }
                    const userId = Math.round(Math.random() * 100000);
                    const userName = getUserName(userId + '');
                    const age = Math.floor(userId / 10000);

                    return (
                        <>
                            {userList.map((user, index) => <User key={index} user={user} />)}
                            <button onClick={(e) => updateUser({ userId, userName, age })}>Add User</button>
                        </>
                    )
                }}
            </UserContext.Consumer>
        </>
    )
};


const UserListFromUseContext = ({ inst }) => {
    const { userList, updateUser } = useContext(UserContext);
    console.log(userList);
    console.log('Rendering userList from the Consumer.', inst);
    return (
        <>
            <h2>Rendering UserList from the Consumer instance-{inst}.</h2>
            {userList.map((user, index) => <User key={index} user={user} />)}
            <button onClick={(e) => updateUser({ userId: 221, userName: 'hello', age: 24 })}>Add User</button>
        </>
    )
}

class UserListFromContextType extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <h2>Rendering UserList from the Consumer instance-{this.props.inst}.</h2>
                {this.context.userList.map((user, index) => <User key={index} user={user} />)}
                <button onClick={(e) => this.context.updateUser({ userId: 453, userName: 'hello', age: 43 })}>Add User</button>
            </>
        );
    }
}
UserListFromContextType.contextType = UserContext


class UserListFromStaticContextType extends React.Component {

    static contextType = UserContext;
    render() {
        console.log('inside UserListFromStaticContextType checking for ... ', this.context);
        return (
            <>
                <h2>Rendering UserList from the Consumer instance-{this.props.inst}.</h2>
                {this.context.userList.map((user, index) => <User key={index} user={user} />)}
                <button onClick={(e) => this.context.updateUser({ userId: 453, userName: 'hello', age: 43 })}>Add User</button>
            </>
        );
    }
}

export const App = () => {
    const [userList, setUserList] = useState(users);
    const updateUser = function (user) {
        // console.log(user);
        setUserList([...userList, user]);
    }
    return (
        <>
            <UserListFromConsumer inst="1" />
            <UserContext.Provider value={{ userList, updateUser }}>
                <UserListFromConsumer inst="2" />
            </UserContext.Provider>
            <UserListFromUseContext inst="3" />
            <UserContext.Provider value={{ userList, updateUser }}>
                <UserListFromUseContext inst="4" />
            </UserContext.Provider>
            <UserListFromContextType inst="5" />
            <UserContext.Provider value={{ userList, updateUser }}>
                <UserListFromContextType inst="6" />
            </UserContext.Provider>
            <UserContext.Provider value={{ userList, updateUser }}>
                <UserListFromStaticContextType inst="7" />
            </UserContext.Provider>
        </>
    )
}
