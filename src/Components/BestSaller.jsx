import "../ComponentCSS/BestSaller.css";
import { Link } from "react-router-dom";
const Bestseller = () => {



  return (
    <div className="  m-3">
      <h2 className="best_title">Best Seller Product</h2> 
      <div className="container_best"  >  
      <div className="cart_best_seller">        
      <div className="cart_image">
          <img
            className=""
            src="images/perfume.png"
            alt="product image"
          />
        </div>
        <div className="cart_body_best">
          <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
            COCO CHANEL
          </h5>
          <div className="seller_btn">
            <button><Link to='/shop'>Shop Now</Link> </button>
          </div>
        </div>
      </div>
      
      <div className="cart_best_seller">        
      <div className="cart_image">
          <img
            className=""
            src="images/perfume.png"
            alt="product image"
          />
        </div>
        <div className="cart_body_best">
          <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
            COCO CHANEL
          </h5>
          <div className="seller_btn">
            <button><Link to='/shop'>Shop Now</Link> </button>
          </div>
        </div>
      </div>
      <div className="cart_best_seller"> 
      <div className="cart_image">
          <img
            className=""
            src="images/perfume.png"
            alt="product image"
          />
        </div>
        <div className="cart_body_best">
          <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
            COCO CHANEL
          </h5>
          <div className="seller_btn">
            <button><Link to='/shop'>Shop Now</Link> </button>
          </div>
        </div>
      </div>
      <div className="cart_best_seller">        
      <div className="cart_image">
          <img
            className=""
            src="images/perfume.png"
            alt="product image"
          />
        </div>
        <div className="cart_body_best">
          <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
            COCO CHANEL
          </h5>
          <div className="seller_btn">
            <button><Link to='/shop'>Shop Now</Link> </button>
          </div>
        </div>
      </div>
      <div className="cart_best_seller">        
      <div className="cart_image">
          <img
            className=""
            src="images/perfume.png"
            alt="product image"
          />
        </div>
        <div className="cart_body_best">
          <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
            COCO CHANEL
          </h5>
          <div className="seller_btn">
            <button><Link to='/shop'>Shop Now</Link> </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Bestseller;
