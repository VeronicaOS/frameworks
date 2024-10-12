import React from "react";
import styles from "./product.module.css"; // Assuming you have a CSS module

const Product = ({ product }) => {
    return (
        <div className={styles.productCard}>
            <img
                src={product.image.url}
                alt={product.title}
                className={styles.productImage}
            />
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.productPrice}>
                ${product.discountedPrice.toFixed(2)}
            </p>
        </div>
    );
};

export default Product;
