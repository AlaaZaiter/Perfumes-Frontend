// Checkout.js
import axios from 'axios';
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import '../ComponentCSS/CheckoutPage.css';
import { getUserID } from "../Util/UserDate";


function Checkout() {
  const[userId,setUserId]=useState("")
  const [orders, setOrders] = useState([]);
  const [accountNumber, setAccountNumber] = useState(1);
  const [date, setDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [stripePromise, setStripePromise] = useState(() => loadStripe(process.env.publishable_Key));

  useEffect(() => {
    setUserId(getUserID());
  }, []);
  useEffect(() => {
    FetchOrderData();
    setUserId(getUserID());

  }, [userId]);

  const FetchOrderData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}/order/getOrdersByUserId/${userId}`);
      console.log('Response:', response.data);
      setOrders(response.data.filter(order => order.status === "Pending"));
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const SetstatusPaid = async (orderId) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_URL}/order/setStatus/${orderId}`, {
        status: "paid",
      });
      console.log("set status to paid");
    } catch (error) {
      console.error(error);
    }
  };

  const handlePayment = async () => {
    for (const order of orders) {
      await SetstatusPaid(order._id);
    } 
  }

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
            {/* Fields corresponding to your Payment model */}
            <input type="text" placeholder="Account Number" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
            <input type="text" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
            {/* 'User' field might be automatically filled based on the logged-in user */}
            {/* 'paymentMethod' field is filled in the handlePayment function */}
            {/* Render the PaymentForm component for credit card details */}
            <button onClick={handlePayment}> Pay Now</button>
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
