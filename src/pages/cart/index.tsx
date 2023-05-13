import { Button, CartProduct, Layout, Section } from "@components";
import { useCart } from "@context/cartprovider";
import { FC, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Cartpage: FC = () => {
    const { cartItems, removeFromCart } = useCart();
    const navigate = useNavigate();
    const { costMap, total } = useMemo(() => {
        const map = new Map();
        let total = 0;
        cartItems.forEach((item) => {
            const cost = item.price * item.quantity;
            total += cost;
            if (map.has(item.id)) {
                const current = map.get(item.id);
                map.set(item.id, {
                    quantity: current.quantity + item.quantity,
                    cost: current.cost + cost,
                });
            } else {
                map.set(item.id, { quantity: item.quantity, cost });
            }
        });
        return { costMap: map, total };
    }, [cartItems]);

    return (
        <Layout className="sticky">
            <Section padding="md" size="lg" className="flex gap-6 relative">
                <Section className="flex flex-col w-full gap-6">
                    {cartItems.length ? (
                        cartItems.map((product) => {
                            return <CartProduct product={product} />;
                        })
                    ) : (
                        <div className="flex flex-col w-2/3 mx-auto justify-center text-center items-center text-h1 font-bungee">
                            <span>
                                Cart is empty... explore some of our products
                                here
                            </span>
                            <Button
                                onClick={() => navigate("/products")}
                                variant="primary"
                                size="lg"
                            >
                                EXPLORE
                            </Button>
                        </div>
                    )}
                </Section>
                {cartItems.length && (
                    <Section className="h-screen sticky top-16">
                        <div className="flex flex-col w-120 h-4/5 xl:w-144 border-2 border-primary rounded-primary gap-4 p-4 overflow-y-scroll">
                            <div className="text-h1">Total</div>
                            {Array.from(costMap.entries()).map(
                                ([id, { quantity, cost }]) => (
                                    <div className="text-primary gap-2 grid grid-cols-2 w-full">
                                        <div className="flex gap-2">
                                            <span className="font-quicksand font-medium">
                                                x{quantity}
                                            </span>
                                            <span>{`Product ${id}`}</span>
                                        </div>
                                        <span className="text-end">
                                            ${cost}
                                        </span>
                                    </div>
                                )
                            )}
                            <div className="border-t-2 items-end text-end w-full justify-end pt-2 flex">
                                <span className="text-h5 font-quicksand">
                                    $
                                    {total
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                </span>
                            </div>
                            <Button
                                className="mt-auto rounded-primary"
                                variant="primary"
                                size="lg"
                            >
                                Checkout
                            </Button>
                        </div>
                    </Section>
                )}
            </Section>
        </Layout>
    );
};

export default Cartpage;
