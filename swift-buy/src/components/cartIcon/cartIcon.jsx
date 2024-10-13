import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import styles from "./cartIcon.module.css";

const CartIcon = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const cartItemCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const handleIconClick = () => {
        navigate("/checkout");
    };

    return (
        <div className={styles.iconContainer} onClick={handleIconClick}>
            <i className="fas fa-shopping-cart fa-lg"></i>

            {cartItemCount > 0 && (
                <span className={styles.overlay}>{cartItemCount}</span>
            )}
        </div>
    );
};

export default CartIcon;
