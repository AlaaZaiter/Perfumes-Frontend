import "../ComponentCSS/BestSaller.css";
import { Link } from "react-router-dom";
const Bestseller = () => {



  return (
    <div className="container  m-3">
      
      <div className="cart_seller">        
      <div className="cart_image">
          <img
            className=""
            src="images/perfume.png"
            alt="product image"
          />
        </div>
        <div className="cart_body">
          <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
            COCO CHANEL
          </h5>
          <div className="seller_btn">
            <button><Link to='/shop'>Shop Now</Link> </button>
          </div>
        </div>
      </div>
      
      <div className="cart_seller">        
      <div className="cart_image">
          <img
            className=""
            src="images/perfume.png"
            alt="product image"
          />
        </div>
        <div className="cart_body">
          <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
            COCO CHANEL
          </h5>
          <div className="seller_btn">
            <button><Link to='/shop'>Shop Now</Link> </button>
          </div>
        </div>
      </div>
      <div className="cart_seller">        
      <div className="cart_image">
          <img
            className=""
            src="images/perfume.png"
            alt="product image"
          />
        </div>
        <div className="cart_body">
          <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
            COCO CHANEL
          </h5>
          <div className="seller_btn">
            <button><Link to='/shop'>Shop Now</Link> </button>
          </div>
        </div>
      </div>
      <div className="cart_seller">        
      <div className="cart_image">
          <img
            className=""
            src="images/perfume.png"
            alt="product image"
          />
        </div>
        <div className="cart_body">
          <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
            COCO CHANEL
          </h5>
          <div className="seller_btn">
            <button><Link to='/shop'>Shop Now</Link> </button>
          </div>
        </div>
      </div>
      <div className="cart_seller">        
      <div className="cart_image">
          <img
            className=""
            src="images/perfume.png"
            alt="product image"
          />
        </div>
        <div className="cart_body">
          <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
            COCO CHANEL
          </h5>
          <div className="seller_btn">
            <button><Link to='/shop'>Shop Now</Link> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
