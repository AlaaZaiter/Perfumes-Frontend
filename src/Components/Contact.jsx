import React from 'react';
import '../ComponentCSS/Contact.css';


const Contact = () => {
    return (
      <div className="bodyA">
        <div className="containerAA">
          <div className="barA">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Category</a></li>
              <li><a className="luxA">Luxfume</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><input type="submit" value="Login" className="loginA" href="#" /></li>
            </ul>
          </div>
          <div className="containerAB">
            <div className="elementA">
              <h1 className="justA">JUST SAY HELLO!</h1>
              <p className="letA">Let us know about you!</p>
              <form action="mailto:solla836@gmail.com" method="post" className="FormAss">
                <input type="text" id="fullname" name="fullname" defaultValue="Full Name..." required className="textareaA" />
                <br />
                <input type="email" id="email" name="email" defaultValue="Email..." required className="textareaA" />
                <br />
                <input id="message" name="message" rows="5" defaultValue="Message..." required className="textareaB" />
                <br />
                <input type="submit" value="SUBMIT" className="submitA" />
              </form>
            </div>
            <div className="elementB">
              <img src="/images/Rectangle 9.png" className="imgA9" alt="Rectangle 9" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;