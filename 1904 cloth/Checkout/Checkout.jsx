import React, { useState, useEffect } from 'react';
import { useCart } from '../src/components/Cart/Cartcontext';
import { FaCreditCard, FaUser, FaCalendarAlt, FaLock, FaArrowRight } from 'react-icons/fa';
import './Checkout.css';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

const Checkout = () => {
  const { cartItems } = useCart();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate(); // For forward button navigation

  // Detect system's dark mode preference
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleDarkModeChange = (e) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    alert('Payment processed!');
  };

  const handleForward = () => {
    // Logic to go forward in the checkout process or to another page
    navigate('/next-page'); // Replace '/next-page' with your next route
  };

  return (
    <div className={`checkout-container ${isDarkMode ? 'dark' : 'light'}`}>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-summary">
            <h3>Total Amount: ${calculateTotal()}</h3>
          </div>
          <form onSubmit={handlePayment} className="payment-form">
            <h3>Payment Information</h3>

            <div className="form-group">
              <label htmlFor="name">
                <FaUser /> Name on Card
              </label>
              <input type="text" id="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="cardNumber">
                <FaCreditCard /> Card Number
              </label>
              <input type="text" id="cardNumber" required />
            </div>

            <div className="form-group">
              <label htmlFor="expiry">
                <FaCalendarAlt /> Expiry Date (MM/YY)
              </label>
              <input type="text" id="expiry" required />
            </div>

            <div className="form-group">
              <label htmlFor="cvv">
                <FaLock /> CVV
              </label>
              <input type="text" id="cvv" required />
            </div>

            <div className="terms">
              <p>
                By completing this transaction, you agree to our{' '}
                <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
              </p>
            </div>

            <button type="submit" className="checkout-button">Pay Now</button>
          </form>
      
        </>
      )}
    </div>
  );
};

export default Checkout;
