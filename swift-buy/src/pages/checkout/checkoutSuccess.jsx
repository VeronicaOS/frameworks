import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext"; // Import CartContext
import styles from "./checkoutSuccess.module.css"; // Import the CSS module

const CheckoutSuccessPage = () => {
    const { setCart } = useContext(CartContext); // Get the setCart function to clear the cart

    useEffect(() => {
        // Clear the cart when this page is loaded
        setCart([]);
    }, [setCart]);

    return (
        <div className={styles.successContainer}>
            <h1>Order Successful!</h1>
            <p>
                Thank you for your purchase. Your order was placed successfully.
            </p>
            <Link to="/" className={styles.backToStoreLink}>
                Back to Store
            </Link>
        </div>
    );
};

export default CheckoutSuccessPage;
