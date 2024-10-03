import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
// import TopProducts from "./components/TopProducts/TopProducts";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Footer from "./components/Footer/Footer";

import About from "./Pages/About";
import Layout from "./Pages/Layout";
// import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from "react-dom/client";
import Home from "../src/Pages/Home"
import Contact from "../src/Pages/Contact"
import Shopnow from "../src/Pages/Shopnow"
import Trackmyorder from "./Pages/Trackmyorder";
import Asooke from "./Pages/Asooke";
import Fashionessentials from "./Pages/Fashionessentials";
import Readytowear from "./Pages/Readytowear";
import { AuthProvider } from "./Pages/AuthContext";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { CartProvider } from "./components/Cart/Cartcontext";
import Cart from "./components/Cart/Cart";
import Checkout from "../Checkout/Checkout"
const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <CartProvider>
      <AuthProvider>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
    
<Route path="/About" element={<About/>}/>
<Route path="/Contactus" element={<Contact/>}/>
<Route path="/Shopnow" element={<Shopnow/>}/>
<Route path="/Trackmyorder" element={<Trackmyorder/>}/>
<Route path="/shopbycategory/Aso-oke" element={<Asooke/>}/>
<Route path="/shopbycategory/Fashion-essentials" element={<Fashionessentials/>}/>
<Route path="/shopbycategory/Ready-to-wear" element={<Readytowear/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/checkout" element={<Checkout/>}/>




{/*          
      <Navbar handleOrderPopup={handleOrderPopup} />
            
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />                */}
      </Route>
      </Routes>
      </BrowserRouter>
      </AuthProvider>
      </CartProvider>
      
    </div>
  );
};

export default App;
