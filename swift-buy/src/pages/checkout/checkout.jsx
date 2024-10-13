import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import styles from "./checkout.module.css";

const CheckoutPage = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const totalPrice = cart.reduce(
        (total, item) => total + item.quantity * item.discountedPrice,
        0
    );

    const handleCheckout = () => {
        navigate("/checkout-success");
    };

    return (
        <div className={styles.checkoutContainer}>
            <h1>Checkout</h1>

            {cart.length > 0 ? (
                <>
                    <ul className={styles.cartList}>
                        {cart.map((item) => (
                            <li key={item.id} className={styles.cartItem}>
                                <img
                                    src={item.image.url}
                                    alt={item.title}
                                    className={styles.cartItemImage}
                                />
                                <div className={styles.cartItemDetails}>
                                    <h2>{item.title}</h2>
                                    <p>
                                        Price: $
                                        {item.discountedPrice.toFixed(2)}
                                    </p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>
                                        Subtotal: $
                                        {(
                                            item.quantity * item.discountedPrice
                                        ).toFixed(2)}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.cartSummary}>
                        <h2>Total: ${totalPrice.toFixed(2)}</h2>
                        <button
                            onClick={handleCheckout}
                            className={styles.checkoutButton}
                        >
                            Checkout
                        </button>
                    </div>
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default CheckoutPage;
