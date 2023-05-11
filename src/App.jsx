import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTopWrapper from "./components/ScrollToTopWrapper";

function App() {
    return (
        <>
            <Router>
                <Navigation />
                <ScrollToTopWrapper />
            </Router>
            <Footer />
        </>
    );
}

export default App;
