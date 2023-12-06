import React from 'react';



function About() {
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
              <li><input type="submit" value="Login" className="loginA" /></li>
            </ul>
          </div>
          <div className="containerAB">
            <div className="elementA">
              <h1 className="justA">OUR MISSION!</h1>
              <p className="textareaA">To weave an aromatic tapestry that transcends the screen, inviting you to immerse yourself in a symphony of scents. Guided by passion and expertise, we curate an olfactory journey where each fragrance tells a unique story. From rare essences to timeless classics, our virtual shelves offer more than products; they house experiences. Join us in discovering the invisible yet unforgettable artistry of perfumes, where every click unveils a new chapter in your scented narrative.</p>
            </div>
            <div className="elementB">
              <img src="/images/Rectangle 62.png" alt="Image" className="imgA9" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;