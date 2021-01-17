
import React from 'react';
import { generateNavLinksFromConfig } from '../../utils/utils';

/**
 * Site Navigation Component
 * @todo Can this be moved to a configuration JSON and read from there ?
 */
const Navigation = ({ config, listStyle }) => {
    return (
        <ul style={listStyle || { listStyle: 'decimal' }}>
            {generateNavLinksFromConfig(config)}
        </ul>
    );
}

export default Navigation;