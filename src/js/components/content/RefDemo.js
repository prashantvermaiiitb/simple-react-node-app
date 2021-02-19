import React, { Component } from "react";
import WithBorder from "../higher-order-components/WithBorder";
/**
 * Demo for the usage of the Refs in the echo-system
 */
class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.refList = new Array(3);
    for (let i = 0; i < this.refList.length; i++) {
      this.refList[i] = React.createRef();
    }
    this.childComponentRef = React.createRef();
    this.setCallbackChildRef = (element) => {
      this.cbChildRef = element;
    };
    this.handleClick = this.handleClick.bind(this);
    this.myFancyButtonRef = React.createRef(); //fancy button reference
    this.calledFunction = this.calledFunction.bind(this);
  }

  calledFunction(e){
    console.log('hello function will be called as the component renders');
  }
  handleClick(e) {
    this.refList.forEach((value) => {
      if (value.current.getAttribute("class") === "active") {
        value.current.removeAttribute("class");
      }
    });
    this.refList[e.target.getAttribute("index")].current.setAttribute(
      "class",
      "active"
    );
  }
  componentDidMount(prevProps, prevState) {
    console.log("RefDemo Mounted...");
    console.log(this.myFancyButtonRef);
  }
  render() {
    let divStyle = {
      padding: 5,
      fontFamily: "monospace",
      fontWeight: "bold",
      fontSize: 15,
    };

    let RefFancyButton = LogPropsHoc(FancyButton);

    return (
      <>
        <div
          style={{
            padding: 5,
            backgroundColor: "#fafafa",
            textAlign: "center",
          }}>
          Ref. usage demo
        </div>
        {this.refList.map((ref, index) => (
          <div
            key={index}
            index={index}
            style={divStyle}
            ref={ref}
            onClick={this.handleClick}>
            Ref#{index}
          </div>
        ))}
        <CreateRefChildComponent ref={this.childComponentRef} />
        <button
          onClick={(e) => {
            // console.log(this.childComponentRef);
            this.childComponentRef.current.focusTextInput();
          }}>
          Focus
        </button>
        (Simple Ref.)
        <br />
        <CallbackRefChildComponent childRef={this.setCallbackChildRef} />
        <button
          onClick={(e) => {
            console.log(this.cbChildRef);
            // this.cbChildRef.current.focusTextInput();
            this.cbChildRef.focus();
          }}>
          Focus
        </button>
        (Callback Ref.)
        <br />
        {/* {Difference from approach 2 because we are forwarding the ref not attaching to component.?} */}
        {<RefFancyButton label="Click Me" ref={this.myFancyButtonRef} />}
        <br/>
        <br/>
        <br/>
        <div><button onClick={this.calledFunction()}>Function called (check console)</button></div>
      </>
    );
  }
}

/**
 * Child component created to show the usage for the Ref's to be used for the
 * Child component references.
 */
class CreateRefChildComponent extends Component {
  constructor(props) {
    super(props);
    this.textInputRef = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput() {
    // console.log("inside focusTextInput");
    // console.log(this.textInputRef);
    this.textInputRef.current.focus();
  }
  render() {
    return <input ref={this.textInputRef} type="text" />;
  }
}

/**
 * https://reactjs.org/docs/forwarding-refs.html it can be useful for some kinds
 * of components, especially in reusable component libraries. Ref forwarding is
 * an opt-in feature that lets some components take a ref they receive, and pass
 * it further down (in other words, “forward” it) to a child.
 */
// const ForwardRefChildComponent = React.forwardRef((props, ref) => {
//   return <input type="text" ref={ref} {...props} />;
// });

class FancyButton extends React.Component {
  componentDidMount() {
    console.log("Fancy button is mounted now");
  }
  render() {
    // console.log(this.props.ref);
    return (
      <>
        <button
          ref={this.props.forwardedRef}
          className="FancyButton"
          onClick={function (e) {
            alert("Hi from the forward ref. button");
          }}>
          {this.props.children || this.props.label}
        </button>
        <span>(forward ref. via Hoc)</span>
      </>
    );
  }
}

const LogPropsHoc = function (WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log("old props:", prevProps);
      console.log("new props:", this.props);
    }
    render() {
      //this is being done to pass the ref passed from the Parent to the button
      const { forwardedRef, ...rest } = this.props;
      return <WrappedComponent forwardedRef={forwardedRef} {...rest} />;
    }
  }
  //This is being developed for showing the forwardRef(LogProps) in Dev Tool
  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }
  //this is being used to display name of the component in the Dev Tools
  const name = WrappedComponent.name || WrappedComponent.displayName;
  forwardRef.displayName = `logProps${name}`;
  return React.forwardRef(forwardRef);
};

/**
 * Example for the callback ref to be passed from the parent to the Dom element in the child.
 * This will be directly hitting the dom node in the child.
 */
class CallbackRefChildComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <input ref={this.props.childRef} type="text" />;
  }
}
/**
 * Wrapping the entire component in the Higher Order function as well.
 */
export default WithBorder(RefDemo, {
  border: "1px solid #00bcd4",
  marginBottom: 5,
});
