import React, { Component } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Content } from "./components/content/Content";

/**
 * CONCEPTS :-
 * (1) How to make the child components ?
 * (2) how to pass the Props to the child components like sampleText ?
 * (3) How to pass the children to the child components like in Content?
 * (4) What are the expressions and how they can be used like {1+2}?
 * (5) Using forceUpdate() for the rendering process- componentDidUpdate() will be called.
 * (6) inline style objects to be used and how ?
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: Math.random(),
    };
  }

  /**
   * Life-cycle hook called after component Did mount
   */
  componentDidMount() {
    console.log(`Component Did Mount called for the APP component`);
    this.setState({ random: Math.random() });
  }

  /**
   * Life-cycle method to be called after the component Did update
   * If we call setState() in here will recieve Error 'maximum render depth reached...'
   */
  componentDidUpdate() {
    console.log(`Component Did Update called for the APP component`);
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
        <Header sampleText="This is the sample text passed as props from the APP." />
        <Content>
          <div>
            <span>Hello World</span>
            <br />
            <span>Expression tester: {1 + 2}</span>
          </div>
        </Content>
        <span style={spanStyle}>{this.state.random}</span>
        <button onClick={() => this.forceUpdate()}>force-update</button>
        <Footer />
      </div>
    );
  }
}
export default App;
