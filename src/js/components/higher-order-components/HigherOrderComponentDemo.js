import React from "react";
import WithBorder from "./WithBorder";
import Sample from "./Sample";
import WithSimpleLoader from "./WithSimpleLoader";
import PersonInfoContainer from "../content/PersonInfoContainer";
import WithLoader from "./WithLoader";
import Content from "../content/Content";
import PersonLoader from "../content/PersonLoader";
import ErrorBoundary from "../content/ErrorBoundary";

/**
 * class for showing the sample possible implementations for the
 * various HOC available.
 */
const HOCDemo = () => {
  /**
   * Wrapping the component with Simple HOC for making boundary across
   * Here we are passing the component wrapped in the function and passing that.
   */
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

  //Example for creating Simple component from JSX in react element
  let test = <h3>Simple JSX display.</h3>;
  let UpdatedText = WithBorder(function (props) {
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
  let EnhanceTest2 = WithBorder(() => test1);

  //Approach : 1
  /**
   * Here we are passing the reference of the Component to the HOC HOC will just
   * wrap this in a function(props) and return that. PersonInfoContainer : is
   * not going to change, this will be class component PersonList is a function
   * returned from the WithLoader and it will return the instance of the
   * WrappedComponent when being invoked.
   */
  let FetchPersonListApproach1 = WithSimpleLoader(PersonInfoContainer, 1);
  // console.log(
  //   FetchPersonListApproach1("please wait while details are being loaded...")
  // ); // instantiating the react component here.

  /**
   * this will return the React class as is so this has to be instantiated using </>
   */
  let FetchPersonApproach2 = WithSimpleLoader(PersonInfoContainer, 2);
  // console.log(new FetchPersonApproach2()); // by this Object will be created but Not REACT one
  // console.log(<FetchPersonApproach2 />); // by this React Object will be created.

  let PersonList3 = WithLoader(
    PersonInfoContainer,
    "Please wait till data loads..."
  );
  // let c = new PersonList3(); // this is just a function call for creating the new Object
  // let d = <PersonList3 />; //this is a react element being created as we have returned the Class
  // console.log(c);
  // console.log(d);
  // console.log(c === d);
  let h1Style = { fontSize: 15, textAlign: "center", fontFamily: "monospace" };
  let divStyle = {
    textAlign: "center",
    backgroundColor: "#cacaca",
    padding: 5,
    textAlign: "center",
    fontFamily: "monospace",
    fontWeight: "bold",
    textTransform: "uppercase",
  };
  return (
    <>
      <h1 style={h1Style}>HOC DEMO START</h1>
      <hr />
      <WrappedContent data-msg="hi" />
      {test}
      <UpdatedText />
      <br />
      <EnhancedSample />
      {test1("Just calling the function...")}
      <EnhancedTest1 msg="Forming React Component.." />
      <div style={{ padding: 5 }}>
        Error Use-case for HOC calling : <EnhanceTest2 />
      </div>
      {FetchPersonListApproach1("...Fetch PersonList HOC Approach1...")}
      <div>
        <br />
        <div style={divStyle}>...Fetch PersonList HOC Approach2...</div>
        <FetchPersonApproach2 />
      </div>
      <div>
        <br />
        <div style={divStyle}>...Fetch PersonList HOC Approach3...</div>
        <ErrorBoundary>
          <PersonLoader />
        </ErrorBoundary>
      </div>

      <br />
      {/* {new PersonList3().render()} */}
      {/* <PersonList3 />; */}
      <hr />
      <h1>HOC DEMO End</h1>
    </>
  );
};

export default HOCDemo;
