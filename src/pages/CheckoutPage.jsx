import axios from 'axios';
import '../ComponentCSS/CheckoutPage.css';
import { useState, useEffect } from 'react';
import { getUserID } from "../Util/userData";
import Header from '../Components/Header';
import Footer from '../Components/Footer'
function Checkout() {
    const [orders, setOrders] = useState([]);
  
    useEffect(() => {
      fetchOrderData();
    }, []);
  
    const fetchOrderData = async () => {
      const userID = getUserID();
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/order/getOrdersByUserId/${userID}`);
        console.log('Response:', response.data);
  
        
        if (response.data && Array.isArray(response.data)) {
          setOrders(response.data); 
        } else {
          console.error('Invalid data format in response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    const totalAmount = orders && orders.length > 0
      ? orders.reduce((accumulator, order) => accumulator + order.amount, 0)
      : 0;

  return (
    <div>
    <Header/>

    <div className="CheckoutContainer">
      <div className='PaymentContainer'>
        <div>
          <div>Billing _________________ Confirmation</div>
          <form className='CheckoutForm'>
            <p>Payment Method</p>
            <div className='PaymentRadiobuttons'>
                <div className='radioPaymentButton'>
                  <input type="radio" name="creditCard" />
                  <img src="/images/credit-card-icon.png" alt="Credit Card Icon" className='card_icon' />
                </div>
                <div className='radioPaymentButton '>
                  <input type="radio" name="creditCard" />
                  <p> Cash on Delivery</p>
                </div>
              
            </div>
            <p className='m-4'>Payment Details</p>
            <div className='input_payment'>
            <input type="text" placeholder="" />
              <label htmlFor="">Enter Name On Card</label>
            </div>
            <div className='input_payment flex '>
            <input type="number" placeholder="" />
              <label htmlFor="">Code Number </label>
            <img src="/images/visa-card-icon.png" alt="Visa Card Icon"  className='card_icon' />
            </div>
            <div className='input_payment '>
            <input type="number" placeholder="" />
           <label htmlFor="">Expiration Date</label>
           </div>
            <div className='flex'>
            <button>Accept</button>
            <button>Confirm Payment:</button>
            </div>
          </form>
        </div>
        <div>
        </div>
      </div>
      <div className='OrderContainer'>
        <p>Orders</p>
        <div className='OrderDetailContainer'>
          {orders.length > 0 ? (
            orders.map((order) => (
              <div key={order._id} className='orderFix'>
                <p className='orderPar'>{order.amount}</p>
                {/* <p className='orderPar'>Status: {order.status}</p> */}
                <p className='orderPar'>Perfumes:</p>
                {order.perfumes.map((perfume) => (
                  <div key={perfume._id} className='flex'>
                    <div className='order_img'> 
                    <img src={perfume.image} alt="Perfume" />
                    </div>
                    <div className=''>
                    <h2 className='orderPar'>Name: {perfume.name}</h2>
                    <p className='orderPar'>Price: {perfume.price}$</p>
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>No orders details available.</p>
          )}
        </div>
        <p className='checkout_totel'>Total : {totalAmount}$</p>
      </div>
    </div>

    <Footer/>
    </div>
  );
}

export default Checkout;