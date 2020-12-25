import React, { Component } from "react";

const WithLoader = (WrappedComponent) => {

  return (props) => <WrappedComponent {...props} />; // instantiation {PersonList()}

  //return WrappedComponent; ///component is getting returned => <PersonList/>
};

export default WithLoader;
