import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            {/* <div> */}
            <Header />
            <main>{children}</main>
            {/* </div> */}
            <Footer />
        </div>
    );
};

export default Layout;
