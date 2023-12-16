import axios from 'axios';
import '../ComponentCSS/CheckoutPage.css';
import { useState, useEffect } from 'react';

function Checkout() {
  const [userId, setUserId] = useState("657c3641f2e47b5afdd5bc69");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    FetchOrderData();
  }, [userId]);

  const FetchOrderData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}/order/getOrdersByUserId/${userId}`);
      console.log('Response:', response.data); // Log the entire response
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const totalAmount = orders.reduce((accumulator, order) => accumulator + order.amount, 0);

  return (
    <div className="CheckoutContainer">
      <div className='PaymentContainer'>
        <div>
          <div>Billing _________________ Confirmation</div>
          <form className='CheckoutForm'>
            <p>Payment Method</p>
            <div className='PaymentRadiobuttons'>
              <label>
                <div className='radioPaymentButton'>
                  <input type="radio" name="creditCard" />
                  <p>Credit Card</p>
                </div>
              </label>
              <label>
                <div className='radioPaymentButton'>
                  <input type="radio" name="Bank Transfer" />
                  <p> Bank Transfer</p>
                </div>
              </label>
            </div>
            <p>Payment Details</p>
            <input type="text" placeholder="Enter Name On Card" />
            <input type="text" placeholder="Code Number" />
            <input type="text" placeholder="Expiration Date" />
            <button>Accept</button>
          </form>
        </div>
        <div></div>
      </div>
      <div className='OrderContainer'>
        <p>Orders</p>
        <div className='OrderDetailContainer'>
          {orders.length > 0 ? (
            orders.map((order) => (
              <div key={order._id} className='orderFix'>
                <p className='orderPar'>{order.amount}</p>
                <p className='orderPar'>Status: {order.status}</p>
                <p className='orderPar'>Perfumes:</p>
                {order.perfumes.map((perfume) => (
                  <div key={perfume._id}>
                    <p className='orderPar'>Name: {perfume.name}</p>
                    <p className='orderPar'>Image: <img src={perfume.image} alt="Perfume" /></p>
                    <p className='orderPar'>Price: {perfume.price}</p>
                    <p className='orderPar'>Discount: {perfume.discount}</p>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>No orders details available.</p>
          )}
        </div>
        <p>Total : {totalAmount}</p>
      </div>
    </div>
  );
}

export default Checkout;
