import React, { Component } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
import Person from "./components/content/Person.jsx";
import LifeCycleHooks from "./components/content/LifeCycleHooks";
import PersonLoader from "./components/content/PersonLoader";
import ErrorBoundary from "./components/content/ErrorBoundary";
import Loader from "./components/content/WithLoader";
// import WithLoader from "./components/content/WithLoader";
import WithLoader from "./components/higher-order-components/WithLoader";
import WithBorder from "./components/higher-order-components/WithBorder";
import Sample from "./components/higher-order-components/Sample";
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
      persons: [
        { id: 1, name: "john", age: 37 },
        { id: 2, name: "jacky", age: 32 },
        { id: 3, name: "jill", age: 8 },
        { id: 4, name: "james", age: 5 },
      ],
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
   * Shuffling the persons data
   */
  shufflePerson() {
    let persons = [...this.state.persons];
    [persons[0], persons[3]] = [persons[3], persons[0]];
    [persons[1], persons[2]] = [persons[2], persons[1]];
    this.setState({ persons });
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

    
    let WrappedContent = WithBorder(
      (props) => (
        <Content>
          <div {...props}>
            <span data-myattribute="custom attribute">Hello World</span>
            <br />
            <span>Expression tester: {1 + 2}</span>
          </div>
        </Content>
      ),
      { border: "3px solid black", marginBottom: 10 }
    );

    return (
      <div>
        <span style={{ padding: 10, margin: 10, display: "flex" }}>
          {"Current React version : " + React.version}
        </span>
        <Header sampleText="This is the sample text passed as props from the APP." />
        <div>
          <div style={{ textAlign: "center", backgroundColor: "#cacaca" }}>
            Concept of the setState() here.
          </div>
          {/* <ErrorBoundary> */}


          {/* <PersonList /> */}

        
          {/* <PersonInfoContainer /> */}
          {/* </ErrorBoundary> */}
          <br />
          <br />
          <br />
          {/* <ErrorBoundary>
            <PersonLoader />
          </ErrorBoundary> */}
          <button onClick={() => this.shufflePerson()}>Shuffle Persons</button>
        </div>
        <WrappedContent data-msg="hi" />
        <HOCDemo />
        <br />
        <br />
        Random Number in State :
        <span style={spanStyle}>{this.state.random}</span>
        Random Number in Open :<span style={spanStyle}>{Math.random()}</span>
        <button onClick={() => this.forceUpdate()}>force-update</button>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <LifeCycleHooks myNumber={this.state.newNumber}></LifeCycleHooks>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}
export default App;
