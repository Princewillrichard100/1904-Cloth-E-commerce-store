import PropTypes from "prop-types";
import { createContext, useReducer, useContext } from "react";

// Cart context
export const Cartcontext = createContext();

// Initial state for cart
const initialState = {
  cartItems: [],
};

// Cart reducer function to handle state updates
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedItems = state.cartItems.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      if (updatedItems.find(item => item.id === action.payload.id)) {
        return { ...state, cartItems: updatedItems };
      }
      return { ...state, cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }] };
    }
    case "REMOVE_FROM_CART": {
      return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload) };
    }
    case "UPDATE_QUANTITY": {
      const updatedItems = state.cartItems.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(1, action.payload.quantity) } // Prevent quantity below 1
          : item
      );
      return { ...state, cartItems: updatedItems };
    }
    default:
      return state;
  }
}

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(Cartcontext);
};

// Cart provider component
export const CartProvider = function({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  // Calculate total price of items in the cart
  const calculateTotal = () => {
    return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Cartcontext.Provider value={{
      cartItems: state.cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      calculateTotal, // Make calculateTotal accessible
    }}>
      {children}
    </Cartcontext.Provider>
  );
};

// Define prop types for CartProvider
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
