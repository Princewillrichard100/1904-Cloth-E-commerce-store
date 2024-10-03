import React from 'react';
import { useCart } from './Cartcontext'; 
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-card">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                  <div className="cart-item-quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="icon-button">
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="icon-button">
                      <FaPlus />
                    </button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="remove-button">
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <h1 className='Total'>Total: ${calculateTotal()}</h1>
          <div className="cart-summary">
            
            <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
