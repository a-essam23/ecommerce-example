import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({}) => {
    const location = useLocation();
    console.log(location.pathname);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return null;
};

export default ScrollToTop;