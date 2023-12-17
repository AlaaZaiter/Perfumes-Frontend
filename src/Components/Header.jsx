import "../index.css";
import Headercontainer from "./HeaderContainer";
import "../ComponentCSS/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Headercontainer">
      <Headercontainer />
      <div className="header_card ">
        <h1 className="content">Discover the</h1>
        <h1 className="content">Fragrance of</h1>
        <h1 className="content">Elegance</h1>
        <div> 
          <p>
          Discover original perfumes at <strong>Luxperfume</strong>.</p> 
         <p>Enhance your beauty
          with our exquisite scents.<br/>
          Delivery all over lebanon.</p> 
        </div>
       
        <button className="buy-button">
          {" "}
          <Link to="/shop">Shop Now!</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
