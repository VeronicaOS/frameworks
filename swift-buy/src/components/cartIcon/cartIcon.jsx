// src/components/CartIcon.js
import React from "react";
import styles from "./cartIcon.module.css"; // Import the CSS module

const CartIcon = () => {
    // You can dynamically set this value based on your state or props
    const cartItemCount = 5;

    return (
        <div className={styles.iconContainer}>
            <i className="fas fa-shopping-cart fa-lg"></i>

            {cartItemCount > 0 && (
                <span className={styles.overlay}>{cartItemCount}</span>
            )}
        </div>
    );
};

export default CartIcon;
