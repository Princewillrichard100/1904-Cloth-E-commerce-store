import React, { useContext, useEffect, useState } from "react";
import { Cartcontext } from "../Cart/Cartcontext"; // Adjust path as needed
import "./ProductCards.css";

const Productcards = () => {
  const [products, setProducts] = useState([]);
  const [globalSuccessMessage, setGlobalSuccessMessage] = useState(""); // Global success message
  const { addToCart } = useContext(Cartcontext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); // Call the existing function from Cartcontext

    // Show global success message
    setGlobalSuccessMessage(`${product.title} was successfully added to cart!`);

    // Clear the message after 3 seconds
    setTimeout(() => {
      setGlobalSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div key={product.id} className="product-card bg-white p-4 rounded-md shadow-md dark:bg-gray-800 transition">
              <img
                src={product.image}
                alt={product.title}
                className="product-image w-full h-48 object-cover rounded-t-md transition-transform duration-300 hover:scale-105"
              />
              <div className="product-info p-2">
                <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{product.category}</p>
                <div className="product-price mt-2">
                  <span className="original-price line-through text-gray-500 dark:text-gray-400">
                    ${product.price + 15}
                  </span>
                  <span className="discounted-price text-lg font-bold text-primary dark:text-primary-light">
                    ${product.price}
                  </span>
                </div>
                <div className="product-rating mt-1">
                  <span className="stars">★★★★☆</span>
                  <span className="review-count text-gray-500 dark:text-gray-400"> (25 reviews)</span>
                </div>
                <div className="button-container mt-3 flex justify-between">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="add-to-cart bg-primary text-white py-2 px-4 rounded transition hover:bg-primary-dark"
                  >
                    Add to Cart
                  </button>
                  <button className="wishlist bg-gray-200 text-gray-700 py-2 px-4 rounded ml-2 transition hover:bg-gray-300">
                    ❤️
                  </button>
                  <button className="share bg-gray-200 text-gray-700 py-2 px-4 rounded ml-2 transition hover:bg-gray-300">
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global success message banner */}
      {globalSuccessMessage && (
        <div className="global-success-message">
          {globalSuccessMessage}
        </div>
      )}
    </div>
  );
};

export default Productcards;
