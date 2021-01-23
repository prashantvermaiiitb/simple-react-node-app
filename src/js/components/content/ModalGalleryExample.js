import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch
} from "react-router-dom";
/**
 * Learnings :-
 * 1. how to set state in location object 
 * 2. how to use 'useHistory' hook
 * 3. how show 2 routes in 1 path 
 */


// This example shows how to render two different screens
// (or the same screen in a different context) at the same URL,
// depending on how you got there.
//
// Click the "featured images" and see them full screen. Then
// "visit the gallery" and click on the colors. Note the URL and
// the component are the same as before but now we see them
// inside a modal on top of the gallery screen.

export default function ModalGalleryExample() {
    return <ModalSwitch />;
}

function ModalSwitch() {
    const { url } = useRouteMatch();
    let location = useLocation();

    console.log('location before..', location);
    // This piece of state is set when one of the
    // gallery links is clicked. The `background` state
    // is the location that we were at when one of
    // the gallery links was clicked. If it's there,
    // use it as the location for the <Switch> so
    // we show the gallery in the background, behind
    // the modal.
    let background = location.state && location.state.background;
    console.log('background ..', background);
    console.log('url in Modal switch..', url);
    /**
     * @todo here the url is restricted till /gallery-demo only.
     */
    return (
        <div>
            <Switch location={background || location}>
                <Route exact path={`${url}`} children={<Home />} />
                <Route path={`${url}/gallery`} children={<Gallery />} />
                <Route path={`${url}/img/:id`} children={<ImageView />} />
            </Switch>

            {/* Show the modal when a background page is set */}
            {background && <Route path={`${url}/gallery/img/:id`} children={<Modal />} />}
        </div>
    );
}

const IMAGES = [
    { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
    { id: 1, title: "Lime Green", color: "LimeGreen" },
    { id: 2, title: "Tomato", color: "Tomato" },
    { id: 3, title: "Seven Ate Nine", color: "#789" },
    { id: 4, title: "Crimson", color: "Crimson" }
];

function Thumbnail({ color }) {
    return (
        <div
            style={{
                width: 50,
                height: 50,
                background: color
            }}
        />
    );
}

function Image({ color }) {
    return (
        <div
            style={{
                width: "100%",
                height: 400,
                background: color
            }}
        />
    );
}
/**
 * Component for the home page of the gallery
 */
function Home() {
    const { url } = useRouteMatch();

    return (
        <div>
            <Link to={`${url}/gallery`}>Visit the Gallery</Link>
            <h2>Featured Images</h2>
            <ul>
                <li>
                    <Link to={`${url}/img/2`}>Tomato</Link>
                </li>
                <li>
                    <Link to={`${url}/img/4`}>Crimson</Link>
                </li>
            </ul>
        </div>
    );
}

function Gallery() {
    let location = useLocation();
    const { url } = useRouteMatch()

    return (
        <div>
            {IMAGES.map(i => (
                <Link
                    key={i.id}
                    to={{
                        pathname: `${url}/img/${i.id}`,
                        // This is the trick! This link sets
                        // the `background` in location state.
                        state: { background: location }
                    }}
                >
                    <Thumbnail color={i.color} />
                    <p>{i.title}</p>
                </Link>
            ))}
        </div>
    );
}

function ImageView() {
    let { id } = useParams();
    let image = IMAGES[parseInt(id, 10)];
    let history = useHistory();

    if (!image) return <div>Image not found</div>;

    return (
        <div>
            <h1>{image.title}</h1>
            <Image color={image.color} />
            <button onClick={(e) => { history.goBack() }}>Go Back</button>
        </div>
    );
}

function Modal() {
    let history = useHistory();
    let { id } = useParams();
    let image = IMAGES[parseInt(id, 10)];

    if (!image) return null;

    let back = e => {
        e.stopPropagation();
        history.goBack();
    };

    return (
        <div
            onClick={back}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background: "rgba(0, 0, 0, 0.15)"
            }}
        >
            <div
                className="modal"
                style={{
                    position: "absolute",
                    background: "#fff",
                    top: 25,
                    left: "10%",
                    right: "10%",
                    padding: 15,
                    border: "2px solid #444"
                }}
            >
                <h1>{image.title}</h1>
                <Image color={image.color} />
                <button type="button" onClick={back}>
                    Close
        </button>
            </div>
        </div>
    );
}
