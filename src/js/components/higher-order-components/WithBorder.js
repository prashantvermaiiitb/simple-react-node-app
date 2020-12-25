import React from "react";
/**
 * Simple HOC for wrapping the component with Borders
 * @param {*} WrappedComponent
 */
const WithBorder = (WrappedComponent, componentStyle) => {
  let defaultStyle = componentStyle || { border: "1px solid red" };
  return function (props) {
    return (
      <>
        <div style={defaultStyle}>
          <span style={{ backgroundColor: "#cacaca" }}>
            Hoc has wrapped this in Border...
          </span>
          <WrappedComponent {...props} />
        </div>
      </>
    );
  };
};

export default WithBorder;
