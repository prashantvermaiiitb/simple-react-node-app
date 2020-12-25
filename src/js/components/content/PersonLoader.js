import React, { Component } from "react";
import Person from "./Person.jsx";
/**
 * High order component for showing the Loading of the Data
 * from the Ajax calls.
 * PersonLoader
 *   - Image
 *   - Person
 */
class PersonLoader extends Component {
  /**
   * constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  /**
   * once the component is mounted in the dom
   */
  componentDidMount() {
    if (this.state.loading) {
      /**
       * Approach-1:
       */
      // let that = this;
      // setTimeout(function () {
      //   fetch("https://reqres.in/api/users")
      //     .then((response) => response.json())
      //     .then((data) => {
      //       // console.log(data);
      //       that.setState({ loading: !that.state.loading, persons: data.data });
      //     });
      // }, 3000);
      /**
       * Approach -2 with Arrow function
       * this will have the proper 'this' reference
       */
      setTimeout(() => {
        fetch("https://reqres.in/api/users")
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            this.setState({ loading: !this.state.loading, persons: data.data });
          });
      }, 3000);
    }
  }

  /**
   * @todo lazy loading this component -- react suspense -- lazy loading of the image
   * @todo using webpack to make the paths relative
   * build path is relative to the 'dist' directory here so path is being written e.g. index.html
   */
  renderImageComponent() {
    return (
      <span>
        <img style={{ width: "100%" }} src="../assets/images/loading.gif" />
      </span>
    );
  }

  /**
   * render method
   */
  render() {
    // console.log(this.state.persons);
    return this.state.loading ? (
      this.renderImageComponent()
    ) : (
      <div>
        {this.state.persons.map((person, index) => (
          <Person key={index} data={person} />
        ))}
      </div>
    );
  }
}

export default PersonLoader;
