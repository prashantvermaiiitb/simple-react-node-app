import React, { Component } from "react";
import Person from "./Person.jsx";

const API = {
  BASE: "https://reqres.in/api/users",
  PAGE: "?page=",
};
/**
 * Person information loader from the network.
 */
class PersonInfoContainer extends Component {
  /**
   * constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {};
    this._ismounted = false;
    this.handleNextAction = this.handleNextAction.bind(this);
    this.handlePreviousAction = this.handlePreviousAction.bind(this);
  }

  /**
   * Making the ajax request for the component
   * @param {*} url
   */
  makeRequest(url, callback) {
    return fetch(url)
      .then((response) => response.json())
      .then(({ page: cp, per_page: pp, total_pages: tp, data: persons }) => {
        console.log("Is component Mounted in makeRequest...", this._ismounted);
        //https://github.com/material-components/material-components-web-react/issues/434
        if (this._ismounted) {
          //have put this based on above
          this.setState({ cp, pp, tp, persons });
          // console.log(callback);
          if (callback) {
            // console.log("calling the callback");
            callback();
          }
        }
      });
  }

  /**
   * once the component is mounted in the dom
   */
  componentDidMount() {
    this._ismounted = true;
    console.log(`personinfo component did mount called...`, this._ismounted);
    let that = this;
    setTimeout(() => {
      this.makeRequest(API.BASE, function () {
        // console.log(typeof that.props.onLoading);
        if (typeof that.props.onLoading === "function") {
          // console.log(that.props);
          that.props.onLoading(false);
        }
      });
    }, 3000);
  }

  // componentDidUpdate(prevProps, prevState, snapShot) {}

  componentWillUnmount() {
    this._ismounted = false;
    console.log(`Personinfo has been un-mounted`);
  }

  /**
   * Previous Action
   * @param {*} event
   */
  handlePreviousAction(event) {
    if (this.state.cp < this.state.pp) {
      this.makeRequest(`${API.BASE}${API.PAGE}${this.state.cp - 1}`);
    }
  }

  /**
   * Next Action
   * @param {*} event
   */
  handleNextAction(event) {
    if (this.state.cp < this.state.pp) {
      this.makeRequest(`${API.BASE}${API.PAGE}${this.state.cp + 1}`);
    }
  }

  /**
   * render method
   */
  render() {
    // console.log(typeof this.state.persons);
    return (
      typeof this.state.persons !== "undefined" && (
        <div>
          {this.state.persons.map((person, index) => (
            <Person key={index} data={person} />
          ))}
          <button
            disabled={this.state.cp < this.state.tp}
            onClick={this.handlePreviousAction}>
            previous
          </button>
          <button
            disabled={this.state.cp === this.state.tp}
            onClick={this.handleNextAction}>
            next
          </button>
        </div>
      )
    );
  }
}

export default PersonInfoContainer;
