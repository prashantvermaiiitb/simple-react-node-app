import React from "react";
import "./content.css";
/**
 * Content class for the react page
 * @param {*} props
 */
export const Content = (props) => {
  /**
   * Runtime assign the property to the element which is className
   */
  return (
    <React.Fragment>
      {React.Children.map(props.children, function (child) {
        return React.cloneElement(child, { className: "content" });
      })}
    </React.Fragment>
  );
};
