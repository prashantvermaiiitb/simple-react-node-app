import React, { Component } from "react";

const WithSimpleLoader = (WrappedComponent, approach) => {
  /**
   * You are returning a function
   * This will be creating instance of the WrappedComponent
   * Instantiation is happening here in the function call by use of the Triangular brackets
   * so this will be only simple function call
   */
  if (!approach || approach === 1) {
    // instantiation is  {PersonList()}
    return (message) => (
      <div style={{ border: "1px solid grey" }}>
        <div
          style={{
            backgroundColor: "#cacaca",
            padding: 5,
            textAlign: "center",
            fontFamily: "monospace",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}>
          {message}
        </div>
        <WrappedComponent />
      </div>
    );
  }

  /**
   * Here we are returning the class reference or function reference as is
   * so the caller has to do the instantiation using </> brackets, while calling this in the Main Component.
   */
  if (approach === 2) {
    return WrappedComponent; //component function is getting returned => <PersonList/>
  }
  return null;
};

export default WithSimpleLoader;
