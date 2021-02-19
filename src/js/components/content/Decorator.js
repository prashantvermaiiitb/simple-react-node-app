@setTitle('Profile')
class Profile extends React.Component {
    render() {
        return (
            <h2>Hello from profile.</h2>
        );
    }
}

/*
  title is a string that will be set as a document title
  WrappedComponent is what our decorator will receive when
  put directly above a component class as seen in the example above
*/
const setTitle = (title) => (WrappedComponent) => {
    return class extends React.Component {
        componentDidMount() {
            document.title = title
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}