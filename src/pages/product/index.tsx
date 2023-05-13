import { FC, useMemo, useState } from "react";
import { Button, Layout, LoremIpsum, Section } from "@components";
import { useCart } from "@context/cartprovider";
import {
    faCartArrowDown,
    faCartFlatbed,
    faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePlaceholder from "@hooks/use-placeholder";
import { Router, useParams } from "react-router-dom";

const Productpage: FC = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const { addToCart, isAdded } = useCart();
    const { product } = usePlaceholder({ queries: [{ name: "product", id }] });
    const inCart = isAdded(id || "");
    const price = useMemo(() => {
        return Math.floor(Math.random() * 100) + 10;
    }, []);
    return (
        <Layout>
            <Section background="wave">
                <Section padding="md" size="lg" className="h-screen flex">
                    <div className="h-5/6 w-2/4">
                        <div className="flex h-full w-full rounded-primary overflow-hidden">
                            {product && (
                                <img
                                    className="h-full w-full"
                                    src={product[0]?.src?.original}
                                />
                            )}
                        </div>
                    </div>
                    <div className="ml-auto w-2/6 px-12 flex flex-col gap-16">
                        <div className="flex flex-col gap-6">
                            <span className="font-mono font-bold text-h1">
                                Product {id}
                            </span>
                            <LoremIpsum className="text-h5" wordCount={40} />
                        </div>
                        <div className="font-mono font-bold text-h4">
                            ${price}
                        </div>
                        <div className="flex w-full gap-6 justify-end">
                            <div className="flex">
                                <Button
                                    variant="primary"
                                    className="font-bold"
                                    size="md"
                                    onClick={() => setQuantity(quantity - 1)}
                                >
                                    -
                                </Button>
                                <input
                                    value={quantity}
                                    min={1}
                                    max={100}
                                    onChange={(e) =>
                                        setQuantity(Number(e.target.value))
                                    }
                                    className="text-h5 text-center w-24 border-y-4 border-primary font-mono"
                                />
                                <Button
                                    variant="primary"
                                    className="font-bold"
                                    size="md"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    +
                                </Button>
                            </div>
                            <Button
                                size="lg"
                                variant="secondary"
                                className="w-max rounded-primary"
                                onClick={() => {
                                    addToCart({
                                        id: id || "",
                                        name: `Product ${id}`,
                                        price,
                                        quantity,
                                        imgs: product[0].src,
                                    });
                                }}
                            >
                                <FontAwesomeIcon icon={faCartPlus} />
                            </Button>
                        </div>
                    </div>
                </Section>
            </Section>
        </Layout>
    );
};

export default Productpage;
