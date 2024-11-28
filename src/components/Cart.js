


// import React from 'react';
// import { useCart } from './CartContext';
// import './Card.css';

// const Cart = () => {
//   const { cart, incrementQuantity, decrementQuantity } = useCart();

//   // Calculate the total cost
//   const totalAmount = cart.reduce((total, item) => total + item.cost * item.quantity, 0);

//   return (
//     <div className="cart-page">
//       <h1>Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         <div className="cart-items">
//           {cart.map((item) => (
//             <div key={item.id} className="cart-item">
//               <img src={item.image} alt={item.name} className="cart-item-image" />
//               <div className="cart-item-details">
//                 <h3>{item.name}</h3>
//                 <p>₹{item.cost}</p>
//                 <div className="quantity-controls">
//                   <button onClick={() => decrementQuantity(item.id)}>-</button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => incrementQuantity(item.id)}>+</button>
//                 </div>
//                 <p>Total: ₹{item.cost * item.quantity}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       <div className="cart-summary">
//         <h3>Total: ₹{totalAmount}</h3>
//         <button className="place-order-btn">Place Order</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;



import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './Card.css';


const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity } = useCart();
  const navigate = useNavigate();

  const totalAmount = cart.reduce((total, item) => total + item.cost * item.quantity, 0);

  const handlePlaceOrder = () => {
    // Navigate to the order details page with the cart data
    navigate('/order-details', { state: { cart, totalAmount } });
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>₹{item.cost}</p>
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                 
                  <span> &nbsp;{item.quantity}&nbsp;</span>
                 
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <p>Total: ₹{item.cost * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h3>Total: ₹{totalAmount}</h3>  
         
        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
