import React from "react";
import PropTypes from "prop-types";
import "./header.css";

/**
 * CONCEPTS :-
 * (1) Loading the CSS required for the component and webpack.config.js to be
 *      checked for the Proper settings and loaders like style-loader / css-loader.
 * (2) Class component created to show the Life-Cycle methods
 * (3) Defining the Default Props and their values
 * (4) Defining the PropTypes validation for the component
 * (5) @todo Applying class Name dynamically from the webpack rather then hard coding.
 * (6) Using state for loading the sampleText which we have got as props from the App.
 */

class Header extends React.Component {
  /**
   * Step-1
   * @param {*} props
   */
  constructor(props) {
    super(props);
    console.log(`Constructor loading ...`);
    this.state = {
      sampleText: this.props.sampleText,
    };
  }
  /**
   * Step-2
   * Error if static is not being used here
   * @param {*} props
   * @param {*} state
   */
  static getDerivedStateFromProps(props, state) {
    console.log(`Derived states from props`);
    console.log(props, state);
    return state;
  }
  /**
   * Step -2.1
   * @param {*} nextProps
   * @param {*} nextState
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log(`should component update..`);
    return true;
  }
  /**
   * Step-3
   */
  render() {
    console.log(`Rendering the component`);
    return (
      <div className="header">
        <div>{this.state.sampleText}</div>
        <div>{this.props.sampleText2}</div>
      </div>
    );
  }
  /**
   * Step- 3.1
   * Something must be returned from here.
   * @param {*} preProps
   * @param {*} prevState
   */
  getSnapshotBeforeUpdate(preProps, prevState) {
    console.log(`Snapshot before update`);
    return null;
  }
  /**
   * Step- 3.2
   * @param {*} prevProps
   * @param {*} prevState
   * @param {*} Snapshot
   */
  componentDidUpdate(prevProps, prevState, Snapshot) {
    console.log(`componentDidUpdate called`);
  }
}
/**
 * Defining Default props
 */
Header.defaultProps = {
  sampleText: `If the sample text1 is not present this will be the default Props.`,
  /**
   * IF we comment the below line of code Error will come in the code because this props has been defined
   * as the required once.
   */
  sampleText2: `If the sample text2 is not present this will be the default Props.`,
};

/**
 * Prop-type validation
 */
Header.propTypes = {
  sampleText: PropTypes.string.isRequired,
  sampleText2: PropTypes.string.isRequired,
};

export default Header;
