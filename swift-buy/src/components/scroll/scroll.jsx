// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to the top of the page whenever the pathname changes
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // This component does not render anything
};

export default ScrollToTop;
