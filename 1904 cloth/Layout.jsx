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
import { Outlet,NavLink} from "react-router-dom";

import PropTypes from 'prop-types'; // Import PropTypes for validation

const Layout = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      
        {/* Render the children here */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Contactus">Contact Us</NavLink>
      <NavLink to="/Trackmyorder">Track My Orders</NavLink>
      <NavLink to="/Shopnow">Shop Now</NavLink>
      <NavLink to="/Shopbycategory">Shop by Category</NavLink>
      {/* <Navbar/> */}
      {/* <Footer /> */}
      <Outlet/>
    </div>
  );
};

// Define prop types for Layout
Layout.propTypes = {
  children: PropTypes.node.isRequired,  // children is of type node
  handleOrderPopup: PropTypes.func.isRequired,  // handleOrderPopup is required and of type function
};

export default Layout;
