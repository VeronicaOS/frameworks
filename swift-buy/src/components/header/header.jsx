import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../cartIcon/cartIcon";
import styles from "./header.module.css";

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>SwiftBuy</div>
            <nav
                className={`${styles.nav} ${isNavActive ? styles.active : ""}`}
                id="nav"
            >
                <Link className={styles.link}>ABOUT</Link>
                <Link to="/" className={styles.link}>
                    SHOP
                </Link>
                <Link to="/contact" className={styles.link}>
                    CONTACT
                </Link>
            </nav>
            <div className={styles.cartIcon}>
                <CartIcon />
            </div>
            <div
                className={styles.hamburger}
                id="hamburger"
                onClick={toggleNav}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default Header;
