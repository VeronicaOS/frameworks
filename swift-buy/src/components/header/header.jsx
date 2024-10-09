// src/components/Header.js
import React from "react";
import CartIcon from "../cartIcon/cartIcon";
import styles from "./header.module.css"; // Import the CSS module

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>SwiftBuy</div>
            <nav className={styles.nav}>
                <a href="#home" className={styles.link}>
                    Home
                </a>
                <a href="#shop" className={styles.link}>
                    Shop
                </a>
                <a href="#contact" className={styles.link}>
                    Contact
                </a>
            </nav>
            <div className={styles.cartIcon}>
                <CartIcon />
            </div>
        </header>
    );
};

export default Header;
