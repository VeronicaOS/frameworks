import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./searchbar.module.css"; // Assuming you're using CSS Modules for styling

const SearchBar = ({ products }) => {
    const [query, setQuery] = useState(""); // State for search input
    const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
    const navigate = useNavigate(); // Use useNavigate for navigation

    // Filter products based on search input
    const handleSearch = (e) => {
        const inputValue = e.target.value;
        setQuery(inputValue);

        // Filter products whose title matches the query
        const matches = products.filter((product) =>
            product.title.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredProducts(matches);
    };

    // Handle clicking on a product
    const handleProductClick = (productId) => {
        // Navigate to the product page when a product is clicked
        navigate(`/product/${productId}`);
    };

    return (
        <div className={styles.searchBarContainer}>
            <input
                type="text"
                placeholder="Search for a product..."
                value={query}
                onChange={handleSearch}
                className={styles.searchInput}
            />
            {query && filteredProducts.length > 0 && (
                <ul className={styles.searchResults}>
                    {filteredProducts.map((product) => (
                        <li
                            key={product.id}
                            onClick={() => handleProductClick(product.id)}
                            className={styles.searchResultItem}
                        >
                            {product.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
