import React, { useState } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cart, setCart] = useState([]);



    
    const addToCart = async () => {
      const data = { userId: localStorage.getItem('userId') }
      const headers = { Authorization: localStorage.getItem('token') }
        try {
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/cart/get`, data, { headers });
          setCart(response.data.cart); 
        } catch (error) {
          console.error('Error get item from cart:', error);
        }
      };
    
  return (
    <div>  
      <h2>{cart.name}</h2>
    {/* Display item details here */}
    <button onClick={() => addToCart(cart.id)}>check out</button></div>
  )
}

export default Cart