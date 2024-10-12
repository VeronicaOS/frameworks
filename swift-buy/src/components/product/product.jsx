import React from "react";
import styles from "./product.module.css"; // Assuming you have a CSS module

const Product = ({ product }) => {
    const price = product.price !== undefined ? product.price : null;
    const discountedPrice =
        product.discountedPrice !== undefined ? product.discountedPrice : null;

    const discount = price && discountedPrice ? price - discountedPrice : 0;
    const hasDiscount = discount > 0;
    return (
        <div className={styles.productCard}>
            <img
                src={product.image.url}
                alt={product.title}
                className={styles.productImage}
            />
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.productPrice}>
                {discountedPrice !== null ? (
                    <>${discountedPrice.toFixed(2)}</>
                ) : (
                    <>Price not available</>
                )}
                {hasDiscount && price !== null && (
                    <>
                        {" "}
                        <span className={styles.originalPrice}>
                            ${price.toFixed(2)}
                        </span>
                    </>
                )}
            </p>
        </div>
    );
};

export default Product;
