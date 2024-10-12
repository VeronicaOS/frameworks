import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, API_KEY, load } from "../../api/constants";
import { CartContext } from "../../context/cartContext"; // Import the CartContext
import styles from "./productPage.module.css"; // CSS module for styling

const ProductPage = () => {
    const { productId } = useParams(); // Get product ID from URL
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const { addToCart } = useContext(CartContext); // Get addToCart function from CartContext

    useEffect(() => {
        const apiKey = load("API_KEY") || API_KEY;
        fetch(`${BASE_URL}/online-shop/${productId}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Error: ${response.status} ${response.statusText}`
                    );
                }
                return response.json();
            })
            .then((data) => {
                setProduct(data.data); // Set the fetched product data
            })
            .catch((error) =>
                setError(`Error fetching product: ${error.message}`)
            );
    }, [productId]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!product) {
        return <p>Loading product details...</p>;
    }

    // Safe checks for price and discountedPrice
    const price = product.price !== undefined ? product.price : null;
    const discountedPrice =
        product.discountedPrice !== undefined ? product.discountedPrice : null;

    const discount = price && discountedPrice ? price - discountedPrice : 0;
    const hasDiscount = discount > 0;

    return (
        <div className={styles.productPage}>
            {product.image && product.image.url ? (
                <img
                    src={product.image.url}
                    alt={product.title}
                    className={styles.productImage}
                />
            ) : (
                <p>No image available</p>
            )}

            <div className={styles.productDetails}>
                <h1 className={styles.productTitle}>{product.title}</h1>
                <p className={styles.productDescription}>
                    {product.description}
                </p>
                <p className={styles.productPrice}>
                    {discountedPrice !== null ? (
                        <>Price: ${discountedPrice.toFixed(2)}</>
                    ) : (
                        <>Price not available</>
                    )}
                    {hasDiscount && price !== null && (
                        <>
                            {" "}
                            <span className={styles.originalPrice}>
                                ${price.toFixed(2)}
                            </span>
                            <span className={styles.discount}>
                                (Save ${discount.toFixed(2)}!)
                            </span>
                        </>
                    )}
                </p>

                <button
                    onClick={() => addToCart(product)} // Add product to the cart
                    className={styles.addToCartButton}
                >
                    Add to Cart
                </button>

                {product.reviews && product.reviews.length > 0 ? (
                    <div className={styles.reviews}>
                        <h3>Reviews</h3>
                        <ul>
                            {product.reviews.map((review) => (
                                <li key={review.id}>
                                    <strong>{review.username}</strong>:{" "}
                                    {review.description}
                                    <br />
                                    Rating: {review.rating}/5
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>No reviews yet.</p>
                )}
            </div>
        </div>
    );
};

export default ProductPage;
