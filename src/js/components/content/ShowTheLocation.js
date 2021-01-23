import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import ScrollToTop from "./ScrollToTop";

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
    render() {
        const { match, location, history } = this.props;

        return (
            <div>
                <ScrollToTop />
                <br />
                <br />
                <div>You are now at {location.pathname}</div>
                <br />
                <br />
                <button onClick={() => history.push('/')}>Go Home</button>
                <br />
                <br />
            </div>
        );
    }
}
ShowTheLocation.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(ShowTheLocation);