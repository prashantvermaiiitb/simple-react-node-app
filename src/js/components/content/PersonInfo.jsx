import React, { Component } from "react";
import Person from "./Person.jsx";

class PersonInfoContainer extends Component {
  /**
   * constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * once the component is mounted in the dom
   */
  componentDidMount() {
    console.log(`personinfo component did mount called...`)
    // this.props.onLoading(true);
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.props.onLoading(false);
        this.setState({ persons: data.data });
      });
  }

  componentWillUnmount() {
    console.log(`Personinfo has been un-mounted`);
  }

  /**
   * render method
   */
  render() {
    console.log(typeof this.state.persons);
    return (
      typeof this.state.persons !== "undefined" && (
        <div>
          {this.state.persons.map((person, index) => (
            <Person key={index} data={person} />
          ))}
          <button>previous</button>
          <button>next</button>
        </div>
      )
    );
  }
}

export default PersonInfoContainer;
