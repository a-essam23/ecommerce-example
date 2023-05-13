import Button from "@components/button";
import { useCart } from "@context/cartprovider";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { v4 } from "uuid";

interface CardProductProps {
    product: {
        id: number | string;
        name: string;
        price: number;
        quantity: number;
        imgs: { [key: string]: string };
    };
}
const CardProduct: FC<CardProductProps> = ({
    product: { id, name, imgs, price, quantity },
}) => {
    // const [currentQuantity, setCurrentQuantity] = useState(quantity);
    const { removeFromCart, changeQuantity } = useCart();
    return (
        <div
            className="flex justify-between gap-1 p-2 bg-neutral border-2 rounded-primary border-primary"
            key={v4()}
        >
            <div className="flex gap-4">
                <div className="overflow-hidden rounded-primary">
                    <img src={imgs.small} />
                </div>
                <div className="flex flex-col">
                    <div className="text-h4 font-mono font-medium">{name}</div>
                    <div className="font-mono font-bold">${price}</div>
                </div>
            </div>
            <div className="flex flex-col justify-between items-end flex-grow">
                <Button
                    size="md"
                    variant="secondary"
                    className="rounded-primary"
                    onClick={() =>
                        removeFromCart({ id, name, imgs, price, quantity })
                    }
                >
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
                <div className="flex h-max">
                    <Button
                        variant="primary"
                        className="font-bold"
                        size="md"
                        onClick={() =>
                            changeQuantity(
                                { id, name, imgs, price, quantity },
                                quantity - 1
                            )
                        }
                    >
                        -
                    </Button>
                    <input
                        value={quantity}
                        min={1}
                        max={100}
                        onChange={(e) =>
                            changeQuantity(
                                { id, name, imgs, price, quantity },
                                Number(e.target.value)
                            )
                        }
                        className="text-h5 text-center w-24 border-y-4 border-primary font-mono"
                    />
                    <Button
                        variant="primary"
                        className="font-bold"
                        size="md"
                        onClick={() =>
                            changeQuantity(
                                { id, name, imgs, price, quantity },
                                quantity + 1
                            )
                        }
                    >
                        +
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
