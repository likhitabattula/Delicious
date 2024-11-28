



import React, { useState } from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const Card = ({ image, name, cost, id }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(Math.max(0, quantity - 1));

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({ id, name, cost, image, quantity });
      navigate('/cart');
    }
  };

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-cost">₹{cost}</p>
        <div className="quantity-controls">
          <button onClick={decrement} disabled={quantity === 0}>-</button>
          <span>{quantity}</span>
          <button onClick={increment}>+</button>
        </div>
        <br></br>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;

