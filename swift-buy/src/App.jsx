// import logo from "./logo.svg";
// import "./App.css";
// import Layout from "./components/layout/layout";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/home/home";
// import ContactPage from "./pages/contact/contact";

// function App() {
//     return (
//         <Layout>
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                     <p>
//                         Edit <code>src/App.js</code> and save to reload.
//                     </p>
//                     <a
//                         className="App-link"
//                         href="https://reactjs.org"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         Learn React
//                     </a>
//                 </header>
//             </div>
//         </Layout>
//     );
// }

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import ProductPage from "./pages/product/productPage";
import ContactPage from "./pages/contact/contact";
import Layout from "./components/layout/layout";
import { CartProvider } from "./context/cartContext";
import CheckoutPage from "./pages/checkout/checkout";

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
                    </Routes>
                </Layout>
            </Router>
        </CartProvider>
    );
};

export default App;
