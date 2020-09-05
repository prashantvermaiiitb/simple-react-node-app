import React, { useState, useEffect } from "react";
import "./content.css";

/**
 * CONCEPTS :-
 * (1) Functional Component
 * (2) Using hooks for the Life-cycle management
 * (3) Using state for setting the value of the props
 * (4) Using react Children API to clone the react element and append the Props dynamically
 * (5) @todo Manual rendering of the component forceUpdate() ?
 * @param {*} props
 */

//create your forceUpdate hook
// function useForceUpdate() {
//   const [value, setValue] = useState(0); // integer state
//   return () => setValue((value) => ++value); // update the state to force render
// }

export const Content = (props) => {
  /**
   * Example of using the state in the functional component.
   * Here we are trying to use the Hooks
   */
  const [className, setClassName] = useState("");

  // call your hook here
  // const forceUpdate = useForceUpdate();

  /**
   * Will be called on component DidMount / DiDUpdate as well
   */
  useEffect(() => {
    console.log("UseEffect called for Content...");
    setClassName("content");

    return () => {
      // cleanup
    };
  }, [""]);

  /**
   * Runtime assign the property to the element which is className
   * using "className" property in the state
   */
  return (
    <React.Fragment>
      {React.Children.map(props.children, function (child) {
        return React.cloneElement(child, { className: className });
      })}
      {/* <button onClick={forceUpdate}>Click me</button> */}
    </React.Fragment>
  );
};
