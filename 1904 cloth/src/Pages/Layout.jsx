// import React from 'react';
// import Navbar from './src/components/Navbar/Navbar';
// import Footer from './src/components/Footer/footer'; // Import your Footer component

// const Layout = ({ children, handleOrderPopup }) => {
//   return (
//     <>
//       <Navbar handleOrderPopup={handleOrderPopup} />
//       <main>{children}</main>
//       <Footer /> {/* Include Footer here */}
//     </>
//   );
// };

// export default Layout;
// Layout.jsx
import { Outlet,} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BottomNav from "../components/Navbar/BottomNav";


const Layout = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      
        {/* Render the children here
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Contactus">Contact Us</NavLink>
      <NavLink to="/Trackmyorder">Track My Orders</NavLink>
      <NavLink to="/Shopnow">Shop Now</NavLink>
      <NavLink to="/Shopbycategory">Shop by Category</NavLink> */}
      <Navbar/>
      <BottomNav/>
      <Outlet/>
      <Footer />
      
    </div>
  );
};

// Define prop types for Layout


export default Layout;
