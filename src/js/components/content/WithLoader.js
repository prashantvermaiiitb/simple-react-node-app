import React from "react";

const WithLoader = (WrappedComponent, loadingMessage) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isLoading: true };
      this.handleLoading = this.handleLoading.bind(this);
    }
    /**
     * Auto-binding will not work here
     * @param {*} loadingStatus
     */
    handleLoading(loadingStatus) {
      this.setState({ isLoading: loadingStatus });
    }
    componentDidMount() {
      console.log(`WithLoader .. Component is mounted in Dom.`);
    }
    componentWillUnmount() {
      console.log(`WithLoader .. component is being unmounted now`);
    }
    render() {
      return (
        <>
          {this.state.isLoading && <h1>{loadingMessage}</h1>}
          <WrappedComponent {...this.props} onLoading={this.handleLoading} />
        </>
      );
    }
  };
};

export default WithLoader;
