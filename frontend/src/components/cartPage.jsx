import React, { useState } from 'react';
import axios from 'axios';

const CartPage = ({ cart, updateCart }) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', address: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!formData.firstName || !formData.lastName || !formData.address) {
      alert('Please fill in all required fields');
      return;
    }

    axios.post('http://localhost:8080/api/orders', { ...formData, cart })
      .then(response => {
        setSuccessMessage(response.data.message);
        updateCart([]);
      })
      .catch(error => console.error('Error placing order:', error));
  };

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cart.map((product, index) => (
        <div key={index} className="cart-item">
          <img src={product.image} alt="" />
          <p>{product.name}</p>
        </div>
      ))}
      <p>Total Price: ${totalPrice}</p>

      <div className="user-details">
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} required />
      </div>

      <button onClick={handlePlaceOrder}>Place Order</button>

      {successMessage && <p>{alert(successMessage)}</p>}
    </div>
  );
};

export default CartPage;