import React, { Component } from "react";

const WithLoader = (WrappedComponent, message, approach) => {
  /**
   * You are returning a function
   * This will be creating instance of the WrappedComponent
   * Instantiation is happening here in the function call by use of the Triangular brackets
   * so this will be only simple function call
   */
  if (!approach || approach === 1) return (props) => <WrappedComponent />; // instantiation is  {PersonList()}

  /**
   * Here we are returning the class reference or function reference as is
   * so the caller has to do the instantiation using </> brackets, while calling this in the Main Component.
   */
  if (approach === 2) {
    return WrappedComponent; //component function is getting returned => <PersonList/>
  }
};

export default WithLoader;
