
import { generateNavLinksFromConfig } from '../../utils/utils';

/**
 * Site Navigation Component
 * @todo Can this be moved to a configuration JSON and read from there ?
 */
const Navigation = ({ config, listStyle }) => {
    return generateNavLinksFromConfig({ config, listStyle });
}

export default Navigation;