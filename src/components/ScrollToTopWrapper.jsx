import useScrollToTop from "./useScrollToTop";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Programs from "../pages/Programs";
import Parentsportal from "../pages/Parentsportal";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

function ScrollToTopWrapper() {
    useScrollToTop();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/portal" element={<Parentsportal />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default ScrollToTopWrapper;
