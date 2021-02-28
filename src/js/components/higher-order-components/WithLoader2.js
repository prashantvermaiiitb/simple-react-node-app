import React, { Component } from 'react';
/**
 * * WithLoader2 higher Order function.
 * * Using Curried function to make the hight order Component more Generic
 * * Component that will be loading the list after being passed i.e. the dependent one 
 * * will be wrapped with this.
 * ! We need to know the props based on which the loader has to be shown, 
 * ! because they will be the one to decide what to show on the screen.
 * @param {*} propName 
 */
const WithLoader = (propName) => (WrappedComponent) => {
    /**
     * Loader component.
     */
    const Loader =  () => {
        return (
            <div><img style={{ width: "100%" }} src="../assets/images/loading.gif" /></div>
        )
    }
    return class LoaderHoc extends Component {
        isEmpty(prop) {
            return (
                prop === null ||
                prop === undefined ||
                (prop.hasOwnProperty('length') && prop.length === 0) ||
                (prop.constructor === Object && Object.keys(prop).length === 0)
            )
        }
        render() {
            // // // // // // // // // // // // // // console.log("LoaderHoc -> render -> propName", propName, this.props[propName], this.isEmpty(this.props[propName]));
            return this.isEmpty(this.props[propName]) ? <Loader/>: <WrappedComponent {...this.props} />
        }
    }
};

export default WithLoader;