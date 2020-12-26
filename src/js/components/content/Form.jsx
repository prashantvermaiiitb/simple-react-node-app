import React, { Component } from "react";
import ReactDOM from "react-dom";
/**
 * Form example for the React with sample input being read.
 */
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleClear(myInput) {
    console.log(myInput);
    this.setState({ value: "" });
    ReactDOM.findDOMNode(myInput).focus();
  }
  render() {
    return (
      <div style={{ border: "1px solid #eaeaea", padding: 5 }}>
        <span>Form Demo: </span>
        <Input
          value={this.state.value}
          onChange={this.handleChange}
          onClear={this.handleClear}
        />
        <h3
          style={this.state.value !== "" ? { border: "1px dotted grey" } : {}}>
          {this.state.value}
        </h3>
      </div>
    );
  }
}

/**
 * Sample class for using Refs across in the components 
 * (1) Refs are created
 * using React.createRef() and attached to React elements via the ref attribute.
 * Refs are commonly assigned to an instance property when a component is
 * constructed so they can be referenced throughout the component.
 */
class Input extends Component {
  render() {
    return (
      <>
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder="type in value"
          ref="myInput"
        />
        <button
          onClick={(e) => {
            console.log(this.refs);
            this.props.onClear(this.refs.myInput);
          }}>
          Clear
        </button>
      </>
    );
  }
}

export default Form;
