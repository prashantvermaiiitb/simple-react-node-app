import React, { Component } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Content } from "./components/content/Content";
import Person from "./components/content/Person.jsx";

/**
 * CONCEPTS :-
 * (1) How to make the child components ?
 * (2) how to pass the Props to the child components like sampleText ?
 * (3) How to pass the children to the child components like in Content?
 * (4) What are the expressions and how they can be used like {1+2}?
 * (5) Using forceUpdate() for the rendering process- componentDidUpdate() will be called.
 * (6) inline style objects to be used and how ?
 * (7) Auto-binding happens for the inline method and easy to use setState() then
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: Math.random(),
      persons:[
        {id:1,name:'john',age:37},
        {id:2,name:'jacky',age:32},
        {id:3,name:'jill',age:8},
        {id:4,name:'james',age:5}
      ]
    };
  }

  /**
   * Life-cycle hook called after component Did mount
   */
  componentDidMount() {
    console.log(`Component Did Mount called for the APP component`);
    this.setState({ random: `Old : ${this.state.random}, new : ${Math.random() }`});
  }

  /**
   * Life-cycle method to be called after the component Did update
   * If we call setState() in here will recieve Error 'maximum render depth reached...'
   */
  componentDidUpdate() {
    console.log(`Component Did Update called for the APP component`);
    // this.setState({ random: Math.random() });
  }

  /**
   * Shuffling the persons data 
   */
  shufflePerson(){
    let persons = [...this.state.persons];
    [persons[0],persons[3]]=[persons[3],persons[0]];
    [persons[1],persons[2]]=[persons[2],persons[1]];
    this.setState({persons});
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
            <span data-myattribute="custom attribute">Hello World</span>
            <br />
            <span>Expression tester: {1 + 2}</span>
          </div>
        </Content>
        {this.state.persons.map((person,index)=><Person key={index} data={person}/>)}
        Random Number in State :<span style={spanStyle}>{this.state.random}</span>
        Random Number in Open :<span style={spanStyle}>{Math.random()}</span>
        <button onClick={() => this.forceUpdate()}>force-update</button>
        <button onClick={() => this.shufflePerson()}>Shuffle Persons</button>
        <Footer />
        <Footer />
      </div>
    );
  }
}
export default App;
