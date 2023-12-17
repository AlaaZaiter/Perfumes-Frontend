import React from "react";
import "../ComponentCSS/Contact.css";
import "../index.css";
import Footer from "../Components/Footer";
import Headercontainer from "./HeaderContainer";

const Contact = () => {
  return (
    <div>
      <Headercontainer />
      <div className="bodyA">
        <div className="container_contact">
          <div className="elementA">
            <h1 className="justA">JUST SAY HELLO!</h1>
            <p className="letA">Let us know about you!</p>
            <form
              action="mailto:solla836@gmail.com"
              method="post"
              className="FormAss"
            >
              <div >
                {" "}
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Full Name..."
                  required
                  className="input_type"
                />
              </div>

              <div>
                {" "}
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email..."
                  required
                  className="input_type"
                />
              </div>
              <div>
                {" "}
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Message..."
                  required
                  className="textarea"
                />
              </div>
              <div>
                <button type="submit" className="submitA">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="elementB">
            <img
              src="/images/Rectangle 9.png"
              className="imgA9"
              alt="Rectangle 9"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
