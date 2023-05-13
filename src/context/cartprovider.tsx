import { useState, createContext, ReactNode, useContext } from "react";

interface CartItem {
    id: number | string;
    name: string;
    price: number;
    quantity: number;
    imgs: { [key: string]: string };
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (product: CartItem) => void;
    clearCart: () => void;
    isAdded: (id: string | number) => CartItem | void;
    changeQuantity: (product: CartItem, quantity: number) => void;
}

const CartContext = createContext<CartContextType>({
    cartItems: [],
    addToCart: (item: CartItem) => {},
    removeFromCart: (product: CartItem) => {},
    clearCart: () => {},
    isAdded: () => {},
    changeQuantity: () => {},
});
type CartProviderProps = {
    children: ReactNode | ReactNode[];
};
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (product: CartItem) => {
        const itemIndex = cartItems.findIndex(
            (item) =>
                product.id === item.id &&
                product.price === item.price &&
                product.quantity === item.quantity
        );
        const newArray = [...cartItems];
        newArray.splice(itemIndex, 1);
        setCartItems(newArray);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const isAdded = (id: string | number) => {
        return cartItems.find((item) => item.id === id);
    };

    const changeQuantity = (product: CartItem, quantity: number) => {
        const itemIndex = cartItems.findIndex(
            (item) =>
                product.id === item.id &&
                product.price === item.price &&
                product.quantity === item.quantity
        );
        const newArray = [...cartItems];
        newArray[itemIndex] = { ...newArray[itemIndex], quantity };
        setCartItems(newArray);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                isAdded,
                changeQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
