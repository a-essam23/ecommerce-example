import {
    Route,
    BrowserRouter as Router,
    Routes,
    ScrollRestoration,
} from "react-router-dom";
import Homepage from "./pages/home";
import Productspage from "./pages/products";
import Productpage from "./pages/product";
import Cartpage from "./pages/cart";
import ScrollToTop from "@hooks/scroll-to-top";
function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<Productspage />} />
                <Route path="/products/:id" element={<Productpage />} />
                <Route path="/cart" element={<Cartpage />} />
            </Routes>
        </Router>
    );
}

export default App;
