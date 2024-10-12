import Layout from "../../components/layout/layout";
import Product from "../../components/product/product";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, API_KEY, load } from "../../api/constants";
import styles from "./home.module.css";
import SearchBar from "../../components/searchbar/searchbar";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiKey = load("API_KEY") || API_KEY; // Load the API key or use the default

        fetch(`${BASE_URL}/online-shop`, {
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
                console.log("Fetched data:", data); // Inspect the fetched data
                setProducts(data.data); // Access the 'data' property
            })
            .catch((error) => {
                setError(`Error fetching products: ${error.message}`);
                console.error("Error fetching products:", error);
            });
    }, []);

    if (error) {
        return <p>{error}</p>; // Display error messages
    }

    if (products.length === 0) {
        return <p>Loading products...</p>; // Display loading or empty state
    }

    return (
        <section>
            <div className={styles.searchbar}>
                <SearchBar products={products} />
            </div>
            <h1 className={styles.h1}>Our Products</h1>
            <div className={styles.homeFlex}>
                <div className={styles.productList}>
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            to={`/product/${product.id}`} // Navigate to product page with product ID
                            className={styles.productLink} // Styling the clickable card
                        >
                            <Product product={product} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomePage;
