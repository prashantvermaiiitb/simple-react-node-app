import { useEffect } from "react";
import WithBorder from "../higher-order-components/WithBorder";
/**
 * component to make the page to scroll on the top
 */
function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default WithBorder(
  ScrollToTopOnMount,
  { padding: 10 },
  "This component will only Scroll the page up."
);
