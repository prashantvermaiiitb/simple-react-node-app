import React from "react";
import WithBorder from "./WithBorder";
import Sample from "./Sample";
import WithLoader from "./WithLoader";
import PersonInfoContainer from "../content/PersonInfoContainer";
/**
 * class for showing the sample possible implementations for the
 * various HOC available.
 */
const HOCDemo = () => {
  //Example for creating Simple component from JSX in react element
  let test = <h3>Simple JSX.</h3>;
  let UpdatedContent = WithBorder(function (props) {
    return test;
  });

  //Creating the sample Component in react
  let EnhancedSample = WithBorder(
    function (props) {
      return <Sample />;
    },
    { border: "3px solid orange" }
  );

  //Creating Sample component with Params from HOC
  let test1 = (msg) => <h3>{msg}sample JSX.</h3>;
  let EnhancedTest1 = WithBorder(
    function (props) {
      return test1(props.msg);
    },
    { border: "2px solid green", margin: 2 }
  );

  //Error will come : Uncaught Error: Objects are not valid as a React child (found: object with keys {}) : thought that test1 is a function and can be used directly in the React HOC
  //needed to be wrapped in function
  //   let EnhanceTest2 = WithBorder(test1);

  //this will work but with @todo warning
  //react-dom.development.js:88 Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.
  //   let EnhanceTest2 = WithBorder(() => test1);

  //Approach : 1
  /**
   * Here we are passing the reference of the Component to the HOC HOC will just
   * wrap this in a function(props) and return that. PersonInfoContainer : is
   * not going to change, this will be class component PersonList is a function
   * returned from the WithLoader and it will return the instance of the
   * WrappedComponent.
   */
  let PersonList = WithLoader(
    PersonInfoContainer,
    "please wait while details are being loaded..."
  );

  let a = PersonList(); //instantiating new Object
  let b = PersonList(); //instantiating new Object

  let PersonList2 = WithLoader(PersonInfoContainer, "Please wait...", 2);

  return (
    <>
      <h1>HOC DEMO START</h1>
      <hr />
      {test}
      <UpdatedContent />
      <br />
      <br />
      <EnhancedSample />
      <br />
      <br />
      {test1("Just calling the function...")}
      <EnhancedTest1 msg="making call to React Component..." />
      <br />
      <br />
      {/* <EnhanceTest2 /> */}

      {PersonList()}
      {a === b ? "both Person objects are same" : "objects are different"}
      <br />
      <br />
      <PersonList2 />
      {/* {PersonList()} */}
      <hr />
      <h1>HOC DEMO End</h1>
    </>
  );
};

export default HOCDemo;
