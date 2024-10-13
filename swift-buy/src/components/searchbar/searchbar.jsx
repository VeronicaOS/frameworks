import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./searchbar.module.css";

const SearchBar = ({ products }) => {
    const [query, setQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        const inputValue = e.target.value;
        setQuery(inputValue);

        const matches = products.filter((product) =>
            product.title.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredProducts(matches);
    };

    const handleProductClick = (productId) => {
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
