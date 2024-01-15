import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FilterProvider, CartProvider } from "./context";
import { ScrollToTop } from "./components";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <ScrollToTop />
          <ToastContainer
            closeButton={false}
            autoclose={3000}
            position={"bottom-right"}
          />
          <App />
        </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);
