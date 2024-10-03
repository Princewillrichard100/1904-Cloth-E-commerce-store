import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaShoppingBag, FaUserCircle, FaEnvelope } from 'react-icons/fa';
import DarkMode from './DarkMode';

const BottomNav = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-white dark:bg-gray-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_6px_-1px_rgba(255,255,255,0.1)] px-4 py-2 rounded-t-xl border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-around items-center">
          <NavItem to="/" icon={<FaHome />} label="Home" isActive={isActive('/')} />
          <NavItem to="/Shopnow" icon={<FaShoppingBag />} label="Shop" isActive={isActive('/Shopnow')} />
          <NavItem to="/contactus" icon={<FaEnvelope />} label="Contact" isActive={isActive('/contactus')} />
          <NavItem
            customContent={
              <div className="flex flex-col items-center">
                <div className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                  <DarkMode />
                </div>
                <span className="text-[10px] mt-0.5 text-gray-600 dark:text-gray-300">Theme</span>
              </div>
            }
          />
          <NavItem to="/profile" icon={<FaUserCircle />} label="Profile" isActive={isActive('/profile')} />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ to, icon, label, isActive, customContent }) => {
  if (customContent) {
    return customContent;
  }

  return (
    <NavLink 
      to={to} 
      className={`flex flex-col items-center transition-transform duration-200 ease-out ${
        isActive ? 'text-primary -translate-y-1' : 'text-gray-600 dark:text-gray-300'
      }`}
    >
      <div className={`p-2 rounded-full transition-colors duration-200 ${
        isActive 
          ? 'bg-primary bg-opacity-20 dark:bg-opacity-30' 
          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}>
        {React.cloneElement(icon, { 
          className: `text-xl ${isActive ? 'text-primary' : ''}`
        })}
      </div>
      <span className={`text-[10px] mt-0.5 ${isActive ? 'font-medium' : ''}`}>{label}</span>
    </NavLink>
  );
};

export default BottomNav;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import { FaHome, FaUserCircle, FaCartShopping } from "react-icons/fa";
// import { MdCategory } from "react-icons/md";
// import { BsMoonStars, BsSun } from "react-icons/bs";

// const BottomNavbar = ({ darkMode, toggleDarkMode }) => {
//   return (
//     <nav className="fixed inset-x-0 bottom-0 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 shadow-md flex justify-around py-2">
//       <NavLink to="/" className="text-center flex flex-col items-center">
//         <FaHome className="text-2xl" />
//         <span className="text-xs">Home</span>
//       </NavLink>
//       <NavLink to="/categories" className="text-center flex flex-col items-center">
//         <MdCategory className="text-2xl" />
//         <span className="text-xs">Categories</span>
//       </NavLink>
//       <NavLink to="/cart" className="text-center flex flex-col items-center">
//         <FaCartShopping className="text-2xl" />
//         <span className="text-xs">Cart</span>
//       </NavLink>
//       <NavLink to="/profile" className="text-center flex flex-col items-center">
//         <FaUserCircle className="text-2xl" />
//         <span className="text-xs">Profile</span>
//       </NavLink>

//       {/* Dark Mode Toggle */}
//       <button
//         onClick={toggleDarkMode}
//         className="text-center flex flex-col items-center"
//       >
//         {darkMode ? (
//           <>
//             <BsMoonStars className="text-2xl" />
//             <span className="text-xs">Dark</span>
//           </>
//         ) : (
//           <>
//             <BsSun className="text-2xl" />
//             <span className="text-xs">Light</span>
//           </>
//         )}
//       </button>
//     </nav>
//   );
// };

// export default BottomNavbar;
