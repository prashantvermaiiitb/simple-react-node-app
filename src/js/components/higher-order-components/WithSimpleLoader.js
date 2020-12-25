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

  /**
   * returning class object based on the wrapped component
   * react_devtools_backend.js:2430 Warning: Can't perform a React state update on an unmounted
   * component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel
   * all subscriptions and asynchronous tasks in the componentWillUnmount method.
   */
  if (approach === 3) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
        this.state = { loading: true };
      }
      handleLoad(loading) {
        this.setState({ loading: loading });
      }
      render() {
        return (
          <>
            {this.state.loading && <h3>please wait as the data loads</h3>}
            <WrappedComponent onLoading={this.handleLoad} />
          </>
        );
      }
    };
  }
  return null;
};

export default WithSimpleLoader;
