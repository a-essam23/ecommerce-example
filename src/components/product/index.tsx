import Button from "@components/button";
import LoremIpsum from "@components/loremipsum";
import { useCart } from "@context/cartprovider";
import { faCartArrowDown, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface ProductProps {
    id: string;
    name: string;
    price: number;
    image: string;
    description?: string;
    onClick?: () => void;
    imgs: { [key: string]: string };
}

const Product: React.FC<ProductProps> = ({
    id,
    name,
    price,
    image,
    description,
    imgs,
    onClick,
}) => {
    const { addToCart } = useCart();
    return (
        <div className="bg-secondary rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition-all duration-150">
            <Link to={`/products/${id}`}>
                <img
                    src={image}
                    alt={name}
                    className="max-h-144 w-full object-cover"
                />
            </Link>
            <div className="px-4 py-1 flex justify-between">
                <div className="flex flex-col">
                    <h2 className="text-h4 font-medium font-roboto text-text">
                        {name}
                    </h2>
                    {price && (
                        <p className="text-normal font-bold font-mono mt-2 text-neutral">
                            ${price.toFixed(2)}
                        </p>
                    )}
                    {description && (
                        <p className="text-sm text-gray-600 mt-2">
                            {description}
                        </p>
                    )}
                </div>
                <div className="flex justify-center items-center">
                    <Button
                        variant="primary"
                        size="md"
                        className="rounded-primary h-max"
                        onClick={() =>
                            addToCart({ id, name, price, quantity: 1, imgs })
                        }
                    >
                        <FontAwesomeIcon icon={faCartPlus} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Product;
