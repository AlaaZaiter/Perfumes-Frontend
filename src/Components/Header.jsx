import React, { useState } from 'react';
import '../index.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="container">
      <nav>
        <ul className="left-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Category</a></li>
        </ul>
        <div className="svg">
          <svg width="170" height="90" viewBox="0 0 171 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.241709 7.53134e-06C0.184938 20.0369 9.08578 39.2786 24.9862 53.492C40.8865 67.7055 62.7584 85.4844 85.3017 85.5483C107.845 85.6122 129.213 67.9557 145.194 53.8326C161.175 39.7095 170.184 20.5186 170.241 0.481687L85.2414 0.24084L0.241709 7.53134e-06Z" fill="#CEB5B3" />
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="svg-text">Luxperfume</text>
          </svg>
        </div>
        <ul className="right-nav">
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><button className="login-button">Login</button></li>
        </ul>
        <div className="burger-menu" onClick=
        {handleMenuClick}>
          <div className={`line ${isMenuOpen ? 'active' : 'Shop'}`}>shop</div>
          <div className={`line ${isMenuOpen ? 'active' : 'Category'}`}>about</div>
          <div className={`line ${isMenuOpen ? 'active' : 'Contact'}`}>login</div>
        </div>
      </nav>
      <div>
        <h1 className="content">Discover the</h1>
        <h1 className="content">Fragrance of</h1>
        <h1 className="content">Elegance</h1>
        <p>Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,<br />
          sed do eiusmod tempor<br />
          incididunt<br />
          commodoconsequat. Duis aute<br />
          irure dolor in reprehenderit in<br />
          voluptate velit esse cillum<br />
          dolore eu fugiat nulla pariatur.</p>
        <button className="buy-button">Buy now</button>
      </div>
    </div>
  );
};

export default Header;