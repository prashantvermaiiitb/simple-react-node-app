import React from "react";
import WithBorder from "./WithBorder";
import Sample from "./Sample";
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

  //this will work but with warning
  //react-dom.development.js:88 Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.
  let EnhanceTest2 = WithBorder(() => test1);

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
      <EnhanceTest2 />
      <hr />
      <h1>HOC DEMO End</h1>
    </>
  );
};

export default HOCDemo;
