import "swiper/swiper-bundle.css";
import "./styles/index.scss";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@context/themeprovider";
import { GenreProvider } from "@context/genreprovider";
import { CartProvider } from "@context/cartprovider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ThemeProvider>
        <GenreProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </GenreProvider>
    </ThemeProvider>
);
