import React, { useState, useContext } from "react";
import { FaBars, FaCaretDown, FaUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import Logo from "../../assets/logo.png";
import DarkMode from "./DarkMode";
import { NavLink } from "react-router-dom";
import { Cartcontext } from "../Cart/Cartcontext";

const navData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/About" },
  { id: 3, name: "Contact Us", path: "/contactus" },
  { id: 4, name: "Track My Order", path: "/Trackmyorder" },
  { id: 5, name: "Shop Now", path: "/Shopnow" },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Aso-Oke",
    path: "/shopbycategory/Aso-oke",
    subCategories: [
      { id: 1, name: "Traditional", path: "/shopbycategory/Aso-oke/traditional" },
      { id: 2, name: "Modern", path: "/shopbycategory/Aso-oke/modern" },
    ],
  },
  { id: 2, name: "Fashion Essentials", path: "/shopbycategory/Fashion-essentials" },
  { id: 3, name: "Ready-to-Wear", path: "/shopbycategory/Ready-to-wear" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const { cartItems } = useContext(Cartcontext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveSubMenu(null);
  };

  const toggleSubMenu = (id) => {
    setActiveSubMenu(activeSubMenu === id ? null : id);
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 sticky top-0 z-50">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          {/* Logo and Store Name */}
          <NavLink to="/" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
            <img src={Logo} alt="Logo" className="w-10" />
            1904 Cloth
          </NavLink>

          {/* Desktop Search Bar and Icons */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border px-2 py-1 focus:outline-none dark:bg-gray-800 dark:border-gray-600"
              />
              <IoMdSearch className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500 group-hover:text-primary" />
            </div>

            {/* Cart Icon */}
            <NavLink to="/cart" className="relative flex items-center text-2xl text-white">
              <FaCartShopping />
              {cartItems.length > 0 && (
  <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
    {cartItems.reduce((total, item) => total + item.quantity, 0)}
  </span>
)}

              
            </NavLink>

            {/* User Profile Icon */}
            <NavLink to="/profile" className="text-2xl text-white">
              <FaUserCircle />
            </NavLink>

            {/* Dark Mode Toggle */}
            <DarkMode />
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center sm:hidden">
            {/* Cart Icon */}
            <NavLink to="/cart" className="relative flex items-center text-2xl text-white mr-4">
              <FaCartShopping />
              
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
                    {cartItems.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
                
              
            </NavLink>

            {/* Hamburger Icon */}
            <button onClick={toggleMobileMenu} className="text-2xl text-white">
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div
          className="bg-white dark:bg-gray-800 w-3/4 h-full p-5"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button onClick={toggleMobileMenu} className="text-2xl mb-5">
            &times;
          </button>

          {/* Search Bar in Mobile Menu */}
          <div className="relative group mb-5">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full border px-4 py-2 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
            />
            <IoMdSearch className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-500 group-hover:text-primary" />
          </div>

          {/* User Profile Section */}
          <div className="flex items-center gap-3 mb-5">
            <FaUserCircle className="text-3xl" />
            <div>
              <p className="font-semibold">Hello, User</p>
              <NavLink to="/login" onClick={toggleMobileMenu} className="text-primary">
                Sign In
              </NavLink>
            </div>
          </div>

          {/* Menu Items */}
          <ul className="space-y-4">
            {navData.map(({ id, name, path }) => (
              <li key={id}>
                <NavLink
                  to={path}
                  className="block text-lg font-medium"
                  onClick={toggleMobileMenu}
                >
                  {name}
                </NavLink>
              </li>
            ))}

            {/* Nested Dropdown Menu */}
            <li>
              <button
                onClick={() => toggleSubMenu("categories")}
                className="flex items-center justify-between w-full text-lg font-medium"
              >
                Shop by Category
                <FaCaretDown
                  className={`transition-transform ${
                    activeSubMenu === "categories" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeSubMenu === "categories" && (
                <ul className="mt-2 pl-4 space-y-2">
                  {DropdownLinks.map(({ id, name, path, subCategories }) => (
                    <li key={id}>
                      {subCategories ? (
                        <>
                          <button
                            onClick={() => toggleSubMenu(`subcategory-${id}`)}
                            className="flex items-center justify-between w-full text-base"
                          >
                            {name}
                            <FaCaretDown
                              className={`transition-transform ${
                                activeSubMenu === `subcategory-${id}` ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {activeSubMenu === `subcategory-${id}` && (
                            <ul className="mt-2 pl-4 space-y-1">
                              {subCategories.map((sub) => (
                                <li key={sub.id}>
                                  <NavLink
                                    to={sub.path}
                                    className="block text-sm"
                                    onClick={toggleMobileMenu}
                                  >
                                    {sub.name}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <NavLink
                          to={path}
                          className="block text-base"
                          onClick={toggleMobileMenu}
                        >
                          {name}
                        </NavLink>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Dark Mode Toggle */}
            <li>
              <DarkMode />
            </li>
          </ul>
        </div>
      </div>

      {/* Lower Navbar for Desktop */}
      <div className="hidden sm:flex justify-center bg-white dark:bg-gray-900">
        <ul className="flex items-center gap-6 py-2">
          {navData.map(({ id, name, path }) => (
            <li key={id}>
              <NavLink
                to={path}
                className="text-lg font-medium hover:text-primary"
              >
                {name}
              </NavLink>
            </li>
          ))}
          {/* Desktop Dropdown */}
          <li className="relative group">
            <button className="flex items-center text-lg font-medium">
              Shop by Category
              <FaCaretDown className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md hidden group-hover:block">
              <ul className="py-2">
                {DropdownLinks.map(({ id, name, path }) => (
                  <li key={id}>
                    <NavLink
                      to={path}
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
