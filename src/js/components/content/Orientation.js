import React from 'react';
export default class WindowDimensions extends React.Component {
    constructor(props){
      super(props);
      this.updateDimensions = this.updateDimensions.bind(this);
    }
     
    componentWillMount() {
      this.updateDimensions()
    }
  
    componentDidMount() {
      window.addEventListener('resize', this.updateDimensions)
    }
  
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions)
    }
  
    updateDimensions() {
      this.setState({width: window.innerWidth, height: window.innerHeight})
    }
  
    render() {
      return <span>{this.state.width} x {this.state.height}</span>
    }
  }