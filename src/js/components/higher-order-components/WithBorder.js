import React from "react";
/**
 * Simple HOC for wrapping the component with Borders
 * @param {*} WrappedComponent
 */
const WithBorder = (WrappedComponent, componentStyle) => {
  let defaultStyle = componentStyle || { border: "1px solid red" };
  let containerStyle = {
    backgroundColor: "#cacaca",
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "monospace",
  };
  return function (props) {
    return (
      <>
        <div style={defaultStyle}>
          <div style={containerStyle}>WithBorder() Hoc has wrapped it...</div>
          <WrappedComponent {...props} />
        </div>
      </>
    );
  };
};

export default WithBorder;
