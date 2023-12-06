import '../ComponentCSS/CheckoutPage.css'
function Checkout() {
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
              <p>Patment Details</p>
            <input type="text" placeholder="Enter Name On Card"/>
            <input type="text" placeholder="Code Number"/>
            <input type="text" placeholder="Expiration Date"/>
            <button>Accept</button>
            </form>
    </div>
    <div>

    </div>
</div>
<div className='OrderContainer'>
    <p>Orders</p>
    <div></div>
    <p>Total</p>
</div>

      </div>
    );
  }
  
  export default Checkout;
  