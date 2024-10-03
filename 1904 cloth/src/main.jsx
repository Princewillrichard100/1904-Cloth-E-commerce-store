import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthProvider } from "./Pages/AuthContext.jsx";
import { CartProvider } from "./components/Cart/Cartcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
    </CartProvider>
    
    
  </React.StrictMode>
);
