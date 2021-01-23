import React from 'react';
import loadable from "@loadable/component";

const Loading = () => <h3>Loading....</h3>

const LoadableComponent = loadable(() => import("./Dashboard.js"), {
    fallback: <Loading />
});


const CodeSplitExample = () => {
    return (
        <>
            <LoadableComponent />
        </>
    );
}

export default CodeSplitExample;