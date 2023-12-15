import '../index.css';
import Headercontainer from './HeaderContainer';
import { Link } from 'react-router-dom';

const Header = () => {
 
  return (
    <div className="Headercontainer">
      <Headercontainer/>
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
       <Link to="/shop"> <button className="buy-button">Buy now</button> </Link>
      </div>
    </div>
  );
};

export default Header;