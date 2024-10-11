// src/components/Product.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./product.module.css";

const Product = ({ product }) => {
    return (
        <div className={styles.productCard}>
            {" "}
            {/* Access class using the styles object */}
            <div className={styles.productImageContainer}>
                <img
                    src={product.image.url}
                    alt={product.image.alt || product.title}
                    className={styles.productImage}
                />
            </div>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.productPrice}>£{product.price.toFixed(2)}</p>
        </div>
    );
};

export default Product;
