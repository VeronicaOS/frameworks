import React, { createContext, useState } from "react";

// Create the CartContext
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Add item to cart function
    const addToCart = (product) => {
        setCart((prevCart) => {
            // Check if the product is already in the cart
            const existingProduct = prevCart.find(
                (item) => item.id === product.id
            );
            if (existingProduct) {
                // If the product is already in the cart, increase the quantity
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // If it's a new product, add it to the cart
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
