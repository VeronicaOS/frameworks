import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import styles from "./checkoutSuccess.module.css";

const CheckoutSuccessPage = () => {
    const { setCart } = useContext(CartContext);

    useEffect(() => {
        setCart([]);
    });

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
