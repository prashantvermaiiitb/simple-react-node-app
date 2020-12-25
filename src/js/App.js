import React, { Component } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LifeCycleHooks from "./components/content/LifeCycleHooks";
import HOCDemo from "./components/higher-order-components/HigherOrderComponentDemo";

/**
 * CONCEPTS :-
 * (1) How to make the child components ?
 * (2) how to pass the Props to the child components like sampleText ?
 * (3) How to pass the children to the child components like in Content?
 * (4) What are the expressions and how they can be used like {1+2}?
 * (5) Using forceUpdate() for the rendering process- componentDidUpdate() will be called.
 * (6) inline style objects to be used and how ?
 * (7) Auto-binding happens for the inline method and easy to use setState() when used arrow function
 * (8) manual binding to be done for the 'setNewNumber' method
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: Math.random(),
      newNumber: 1,
    };
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  /**
   * Life-cycle hook called after component Did mount
   */
  componentDidMount() {
    console.log(`Component Did Mount called for the APP component`);
    this.setState({
      random: `Old : ${this.state.random}, new : ${Math.random()}`,
    });
  }

  /**
   * Life-cycle method to be called after the component Did update
   * If we call setState() in here will recieve Error 'maximum render depth reached...'
   */
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState);
    console.log(`Component Did Update called for the APP component`);
    // this.setState({ random: Math.random() });
  }

  /**
   * setting new number for showing the lifecycle hooks
   * @todo since this is not called from within the arrow function
   * this method need to be bind in the "constructor"
   */
  setNewNumber() {
    this.setState({ newNumber: this.state.newNumber + 1 });
  }

  render() {
    /**
     * Css object created and will be used in React.
     */
    let spanStyle = {
      display: "flex",
      padding: 10,
      marginBottom: 10,
      backgroundColor: "lightgrey",
    };

    return (
      <div>
        <Header sampleText="Sample text passed as props from the APP." />
        <span
          style={{
            padding: 10,
            margin: 10,
            display: "flex",
            border: "1px solid #cacaca",
          }}>
          {"E.g. Expression eval: Current React version : " + React.version}
        </span>
        <div>
          <div style={{ backgroundColor: "#cacaca" }}>
            <div
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 14,
                padding: "5px 0",
                textDecoration: "underline",
              }}>
              E.g. ForceUpdate() / Concept of the setState() here.
            </div>
            <br />

            <span style={spanStyle}>
              Current Random Number(s) in State : {this.state.random}
            </span>
            <span style={spanStyle}>Random Number: {Math.random()}</span>
            <button onClick={() => this.forceUpdate()}>force-update</button>
            <button onClick={this.setNewNumber}>INCREMENT</button>
            <LifeCycleHooks myNumber={this.state.newNumber}></LifeCycleHooks>
          </div>
        </div>
        <HOCDemo />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}
export default App;
