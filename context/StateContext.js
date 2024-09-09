'use client';

import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    const onAdd = (product, quantity) => {
        const exist = cartItems.find((item) => item._id === product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity);

        if (exist) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) {
                    return { ...cartProduct, quantity: cartProduct.quantity + quantity };
                }
            })

            setCartItems(updatedCartItems);
        }
        else {
            product.quantity = quantity;

            setCartItems([...cartItems, { ...product }]);
        }
        toast.success(`${qty} ${product.name} added to the cart.`)
    }

    const increaseQty = () => {
        setQty((prevQty) => prevQty + 1);
    };

    const decreaseQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;
            return prevQty - 1;
        });
    };

    return (
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                cartItems,
                setCartItems,
                totalPrice,
                setTotalPrice,
                totalQuantities,
                setTotalQuantities,
                qty,
                increaseQty,
                decreaseQty,
                onAdd
            }}
        >
            {children}
        </Context.Provider>

    );
};

export const useStateContext = () => useContext(Context);
