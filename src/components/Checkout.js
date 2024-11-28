// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './Card.css';

// const OrderDetails = () => {
//   const { state } = useLocation(); // Access cart and totalAmount passed through navigation
//   const { cart, totalAmount } = state;

//   return (
//     <div className="order-details-page">
//       <h1>Order Details</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         <div className="order-items">
//           {cart.map((item) => (
//             <div key={item.id} className="order-item">
//               <img src={item.image} alt={item.name} className="order-item-image" />
//               <div className="order-item-details">
//                 <h3>{item.name}</h3>
//                 <p>₹{item.cost}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <p>Total: ₹{item.cost * item.quantity}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       <div className="order-summary">
//         <h3>Total Amount: ₹{totalAmount}</h3>
//         <button className="confirm-order-btn">Confirm Order</button>
//       </div>
//     </div>
//   );
// };

// export default OrderDetails;

import React, { useState } from 'react';
import { useCart } from './CartContext';

const Checkout = () => {
  const { cart } = useCart();
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentMode, setPaymentMode] = useState('UPI');
  const [cardNumber, setCardNumber] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [discount, setDiscount] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(50); // Example delivery charge
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  // Calculate totals
  const totalAmount = cart.reduce((total, item) => total + item.cost * item.quantity, 0);
  const totalToPay = totalAmount - discount + deliveryCharge;

  // Minimum date for delivery (Nov 1, 2024)
  const minDate = "2024-11-01T00:00";

  // Function to handle order placement
  const handlePlaceOrder = () => {
    console.log("Delivery Address:", deliveryAddress);
    console.log("Delivery Time:", deliveryTime);
    console.log("Payment Mode:", paymentMode);
    console.log("Card Number:", cardNumber);

    // Validation: Ensure all required fields are filled
    if (!deliveryAddress || !deliveryTime) {
      alert("Please fill all required fields!");
      return;
    }

    // Validation: Check if Credit Card mode is selected, and card number is provided
    if (paymentMode === 'Credit Card' && !cardNumber) {
      alert("Please enter your card number.");
      return;
    }

    // Validation: Ensure the selected delivery date is not in the past
    const currentDate = new Date();
    const selectedDate = new Date(deliveryTime);

    if (selectedDate < currentDate) {
      alert("The selected delivery date cannot be in the past.");
      return;
    }

    // If all validations pass, place the order
    alert("Order placed successfully!");
    setIsOrderPlaced(true);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      {/* Delivery Address */}
      <div>
        <label>Delivery Address:</label>
        <input
          type="text"
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
          placeholder="Enter your delivery address"
        />
      </div>

      {/* Payment Mode Selection */}
      <div>
        <label>Payment Mode:</label>
        <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
          <option value="UPI">UPI</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>
      </div>

      {/* Card Number Field for Credit Card Payment */}
      {paymentMode === 'Credit Card' && (
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter your card number"
          />
        </div>
      )}

      {/* Delivery Time */}
      <div>
        <label>Delivery Time:</label>
        <input
          type="datetime-local"
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
          min={minDate} // Set minimum date as Nov 1, 2024
        />
      </div>

      {/* Order Summary */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <span>{item.name} - {item.quantity} x ₹{item.cost}</span>
            </div>
          ))}
        </div>
        <div>
          <p>Discount: ₹{discount}</p>
          <p>Delivery Charge: ₹{deliveryCharge}</p>
          <h3>Total to Pay: ₹{totalToPay}</h3>
        </div>
      </div>

      {/* Place Order Button */}
      <div>
        <button onClick={handlePlaceOrder} disabled={isOrderPlaced}>
          {isOrderPlaced ? "Order Placed" : "Confirm Order"}
        </button>
      </div>

      {/* Help Section */}
      <div>
        <p>Need help? Call us at <strong>1111111111</strong></p>
      </div>
    </div>
  );
};

export default Checkout;




