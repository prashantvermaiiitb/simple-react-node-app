import React, { Component } from 'react';
/**
 * Class for showing the Lifecycle hooks.
 */
export default class LifeCycleHooks  extends React.Component {
    constructor(props){
        super(props);
        console.log('LifeCycleHooks constructor Will be called once..');
    }
    componentWillMount() {
       console.log('LifeCycleHooks Component WILL MOUNT!')
    }
    componentDidMount() {
       console.log('LifeCycleHooks Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {    
       console.log('LifeCycleHooks Component WILL RECIEVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
       return true;
    }
    componentWillUpdate(nextProps, nextState) {
       console.log('LifeCycleHooks Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
       console.log('LifeCycleHooks Component DID UPDATE!')
    }
    componentWillUnmount() {
       console.log('LifeCycleHooks Component WILL UNMOUNT!')
    }
    render() {
        return (
          <div>
             <h3>{this.props.myNumber}</h3>
          </div>
       );
    }
 }