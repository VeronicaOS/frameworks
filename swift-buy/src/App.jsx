import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import ProductPage from "./pages/product/productPage";
import ContactPage from "./pages/contact/contact";
import Layout from "./components/layout/layout";
import { CartProvider } from "./context/cartContext";
import CheckoutPage from "./pages/checkout/checkout";
import CheckoutSuccessPage from "./pages/checkout/checkoutSuccess";

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route
                            path="/product/:productId"
                            element={<ProductPage />}
                        />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route
                            path="/checkout-success"
                            element={<CheckoutSuccessPage />}
                        />
                    </Routes>
                </Layout>
            </Router>
        </CartProvider>
    );
};

export default App;
