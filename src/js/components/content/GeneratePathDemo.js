import React from 'react';
import { generatePath } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

/**
 * Generating path from the expressions so that they can be matched
 */
const GeneratePathDemo = () => {
    const pathGenerated = generatePath("/user/:id/:entity(posts|comments)", {
        id: 1,
        entity: "posts"
    });
    return (
        <>
            <ScrollToTop />
            <span>Generatd Path : {pathGenerated}</span>
        </>
    );
}

export default GeneratePathDemo;