import { useEffect } from "react";
import WithBorder from "../higher-order-components/WithBorder";
/**
 * component to make the page to scroll on the top
 */
function ScrollToBottom() {
    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, []);

    return null;
}

export default WithBorder(ScrollToBottom,
    { padding: 10 },
    'This component will only Scroll the page up.');