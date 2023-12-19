import { useState, useEffect } from "react";
import { getUserID } from "../Util/userData";
import axios from "axios";

const CartData = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetchOrderData();
  }, []);

  const fetchOrderData = async () => {
    const userID = getUserID();
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}/cart/getByUserId/${userID}`);
      console.log('Response:', response.data);

      if (response.data.success) {
        setCarts(response.data);
      } else {
        console.error('Data retrieval unsuccessful:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };
  const handleDelete = async (ID) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_URL}/cart/delete/${ID}`);
      if (response.data.success) {
        // Remove the deleted cart from the local state
        const updatedCarts = carts.filter((cart) => cart._id !== ID);
        setCarts(updatedCarts);
      } else {
        console.error('Deletion unsuccessful:', response.data.message);
      }
    } catch (error) {
      console.error('Error deleting cart:', error);
    }
  };
  return (
    <div>
      <div>
        {carts.map((cart) => (
          <div key={cart._id}>
            <div>
              Perfumes:
              {cart.perfumes.map((perfume) => (
                <div key={perfume._id}>
                  <p>Name: {perfume.name}</p>
                  <p>description: {perfume.description}</p>
                  <p>Price: {perfume.price}$</p>
                  <button onClick={() => handleDelete(cart._id)}>Delete Cart</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartData;
