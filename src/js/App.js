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
 */
class App extends Component {
  render() {
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

        <Footer />
      </div>
    );
  }
}
export default App;
