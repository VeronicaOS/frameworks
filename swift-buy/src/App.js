// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React from "react";
import Layout from "./components/layout/layout";

function App() {
    return (
        <Layout>
            <div style={{ padding: "1rem" }}>
                <h1>Welcome to My E-Commerce Store</h1>
                <p>Start shopping with amazing deals!</p>
            </div>
        </Layout>
    );
}

export default App;
