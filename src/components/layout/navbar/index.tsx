import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faCartShopping,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useGenre } from "@context/genreprovider";
import { useCart } from "@context/cartprovider";
import Button from "@components/button";
import LoginModal from "@components/login-modal";

interface NavbarProps {
    //
}

const Navbar: React.FC<NavbarProps> = ({}) => {
    const [isVisible, setIsVisible] = useState(true);
    const { genre } = useGenre();
    const { cartItems } = useCart();
    const loginRef = useRef(null);

    useEffect(() => {
        let prevScrollPos = window.scrollY;
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsVisible(
                prevScrollPos > currentScrollPos || currentScrollPos < 10
            );
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="bg-primary h-16">
            <div
                className={`fixed z-10 flex items-center h-16 text-neutral w-full transition-all duration-500 ${
                    isVisible ? "top-10 md:top-8" : "-top-120"
                } ${
                    window.scrollY > 250
                        ? "bg-neutral text-secondary shadow"
                        : "bg-primary text-neutral"
                }`}
            >
                <nav className="flex container--md items-center justify-between min-h-full max-h-full h-full">
                    <Link className="font-bungee text-h1" to="/">
                        {genre.toUpperCase()}-Store
                    </Link>
                    <div className="flex text-h5 gap-3 lg:gap-6 items-start">
                        <Link to="/products" className="flex">
                            <FontAwesomeIcon icon={faSearch} />
                        </Link>
                        <Link to="/cart" className="flex relative">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <div className="top-2/4 -translate-x-2/4 items-center justify-center left-3/4 h-4 p-1 absolute bg-white rounded-full text-accent text-xs font-bold font-mono text-center">
                                <span className="text-center items-center flex w-full h-full justify-center">
                                    {cartItems.reduce(
                                        (acc, curr) => acc + curr.quantity,
                                        0
                                    )}
                                </span>
                            </div>
                        </Link>
                        <button ref={loginRef} className="flex">
                            <FontAwesomeIcon icon={faUser} />
                            {/* <LoginModal Ref={loginRef} /> */}
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
