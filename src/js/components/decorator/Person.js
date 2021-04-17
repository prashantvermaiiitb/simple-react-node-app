import React, { Component } from "react";
import { DecoHuman } from "./Human";

/**
 * ? Even if this function returns nothing this will be rendering the old component
 * @param {*} WrappedComponent
 * @param {*} key
 * @param {*} descriptor
 */
function enable(WrappedComponent, key, descriptor) {
  console.log("Decorator called!!!", WrappedComponent);
  WrappedComponent.lips = "pink";

  //! below gives error because this is the we are trying to instantiate and return the component here
  // return <>{target}</>;
  // return (
  //   <>
  //     <h1>Wrapped in Decorator</h1>
  //     <WrappedComponent />
  //   </>
  // );

  //! below gives error because of the naming convention
  // return (props) => {
  //   return <target />;
  // };

  //! cannt call class as the function
  // return <>{WrappedComponent()}</>;

  return (props) => {
    return (
      <>
        <h1>Wrapped in the Decorator</h1>
        <WrappedComponent />
      </>
    );
  };
}

/**
 * for removing the errors in the visual code for this Decorator function
 * we have to set the compiler options in the jsconfig.json
 */
@enable
export default class Person extends Component {
  render() {
    return (
      <>
        <span>Sample example for the Decorator.</span>
        <DecoHuman />
      </>
    );
  }
}
