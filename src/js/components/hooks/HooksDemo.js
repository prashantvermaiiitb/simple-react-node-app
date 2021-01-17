import React, { useState, useEffect } from 'react';
import WithBorder from '../higher-order-components/WithBorder';
import { NavLink, Route, Redirect, useParams, useRouteMatch, Switch } from 'react-router-dom';
import { sleep } from '../../utils/utils';
/**
 * @todo : this is being loaded for removing : https://github.com/babel/babel/issues/9849
 * Error that's being coming : ReferenceError regeneratorRuntime is not defined 
 */
import regeneratorRuntime from "regenerator-runtime";
import './hooks.css';
import WithSimpleLoader from '../higher-order-components/WithSimpleLoader';
/**
 * This will an example implementation for the react Hooks.
 * useState - used
 * useEffect - used
 * useLocation
 * useRouteMatch - used
 * useParams - used
 * useHistory
 * Custom Hooks and using it
 */

/**
 * API for the Data.
 */
const API = {
    DATA: {
        USERS: `https://jsonplaceholder.typicode.com/users`,
        USER: (userId) => `https://jsonplaceholder.typicode.com/users/${userId}`,
        USER_ALBUMS: (userId) => `https://jsonplaceholder.typicode.com/users/${userId}/albums`
    },
    UI: {
        USER: `/hooks/users/`
    }
}
/**
 * Making network request using fetch() method.
 * @param {*} url 
 */
const makeRequest = (url) => fetch(url);

/**
 * Header component for the page.
 */
const HEADER_LIST = ['id', 'name', 'information'];
const Header = () => {
    return (
        <div className="hooks-container">
            {HEADER_LIST.map((value, index) => <div className="user-info-header" key={index}>{value}</div>)}
        </div>
    );
};

const renderImageComponent = () => {
    return (
        <span>
            <img style={{ width: "100%" }} src="../assets/images/loading.gif" />
        </span>
    );
}

/**
 * Printing the user information from the userList.
 * @param {*} param0 
 */
const User = ({ user }) => {
    // console.log('user in user function', user);
    const { id, name, ...rest } = user;
    return (
        <div className="user-container">
            <div className="user-info">{id}</div>
            <div className="user-info">
                <NavLink to={`${API.UI.USER}${id}`}>{name}</NavLink></div>
            <div className="user-info" style={{ border: '1px solid #eaeaea' }}>
                {Object.keys(rest).filter((info) => typeof rest[info] !== 'object').map((info, index) => {
                    return (
                        <div key={index}>
                            <span style={{ fontWeight: 'bold' }}>{info}:</span>
                            <span style={{ wordBreak: 'break-all' }}>{rest[info]}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

/**
 * User List for the page.
 */
const UserList = () => {
    const { url } = useRouteMatch();
    const [userList, setUserList] = useState(null);

    const fetchUsers = async () => {
        const data = await makeRequest(API.DATA.USERS).then(response => response.json());
        // console.log(data);
        setUserList(data);
    }

    useEffect(() => {
        fetchUsers();
        // return () => {
        //     cleanup
        // }
    }, [])

    const html = () => (
        <>
            {userList.map((user, index) => <User key={index} user={user} />)}
            {/* for making the page to scroll down automatically to the Bottom of the page. */}
            {window.scrollTo(0, document.body.scrollHeight)}
            <Switch>
                <Route path={`${url}/:id`}>
                    <UserAlbums />
                </Route>
            </Switch>
        </>
    )

    return (
        Array.isArray(userList) && userList.length > 0 ? html() : renderImageComponent()
    );
}

/**
 * Getting album information for the User.
 */
const UserAlbums = () => {
    const { id: userId } = useParams();
    // console.log('User album', userId);

    const [albums, setAlbums] = useState(null);

    const fetchAlbums = async () => {
        const data = await makeRequest(API.DATA.USER_ALBUMS(userId)).then(response => response.json());
        console.log(data);
        setAlbums(data);
    }

    useEffect(() => {
        fetchAlbums();
        // return () => {

        // }
    }, [userId]); // this is being needed for loading the new component.

    const AlbumInfo = () => (
        <div style={{ fontFamily: 'monospace' }}>
            <h3>Album Information</h3>
            <ul style={{ listStyle: 'decimal' }}>{albums.map((album, index) => {
                return <li key={index}>{album.title}</li>
            })}</ul>
        </div>
    )

    return (
        Array.isArray(albums) && albums.length > 0 ? AlbumInfo(albums) : <h1 style={{ fontFamily: 'monospace' }}>...loading album information for user{userId}</h1>
    )
}

//wrapping the userlist to serve the image before loading
// const UserListHoc = WithSimpleLoader(UserList);

/**
 * show the user information details for the project 
 */
const UserInfoList = () => (
    <>
        <Header />
        {/* {UserListHoc()} */}
        <UserList />
    </>
)

/**
 * Should return the nested Routes to the proper paths and redirects.
 * this will be loading the information for the user frm the hooks.
 * should demonstrate the didMount() / didUpdate() life-cycle hooks.
 * @todo subsequent clicks on the Hooks is not redirecting the page.
 */
const HooksDemo = () => {
    return (
        <div>
            <Route path='/hooks'>
                <Redirect to="/hooks/users" />
            </Route>
            <Route path="/hooks/users" component={UserInfoList} />
        </div>
    )
}

export default WithBorder(HooksDemo);