// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../cartIcon/cartIcon";
import styles from "./header.module.css"; // Import the CSS module

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>SwiftBuy</div>
            <nav className={styles.nav}>
                <Link to="/" className={styles.link}>
                    Home
                </Link>
                <Link className={styles.link}>Shop</Link>
                <Link to="/contact" className={styles.link}>
                    {" "}
                    Contact
                </Link>
            </nav>
            <div className={styles.cartIcon}>
                <CartIcon />
            </div>
        </header>
    );
};

export default Header;
