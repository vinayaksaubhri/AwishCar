import { useEffect } from "react";

function ScrollToOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
export default ScrollToOnMount;
