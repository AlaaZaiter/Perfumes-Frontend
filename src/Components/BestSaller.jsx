import "../ComponentCSS/BestSaller.css";
import { useState, useEffect } from "react";
// import { Animator, ScrollContainer, ScrollPage,batch, Fade , FadeIn  } from "react-scroll-motion";
const Bestseller = () => {
  // const [fadeIn, setFadeIn] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!fadeIn && window.scrollY > 100) {
  //       setFadeIn(true);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
    
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [fadeIn]);

  return (
    <div className="container ">
      
      <div className="cart_seller">        
      <div className="cart_image">
          <img
            className="p-8 rounded-t-lg"
            src="images/perfume.png"
            alt="product image"
          />
        </div>
        <div className="cart_body">
          <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
            COCO CHANEL
          </h5>
          <div className="seller_btn">
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    {/* <ScrollPage page={1}>
          <Fade>
          <FadeIn>
      <div className="cart_seller">
        <div className="cart_image">
          <img
            className="p-8 rounded-t-lg"
            src="images/perfume.png"
            alt="product image"
          />
        </div>
        <div className="cart_body">
          <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
            COCO CHANEL
          </h5>
          <div className="seller_btn">
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      </FadeIn>
          </Fade>
        </ScrollPage> */}
      {/* <div className="cart_seller">
        <div className="cart_image">
          <img
            className="p-8 rounded-t-lg"
            src="images/perfume.png"
            alt="product image"
          />
        </div>
        <div className="cart_body">
          <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
            COCO CHANEL
          </h5>
          <div className="seller_btn">
            <button>Shop Now</button>
          </div>
        </div>
      </div>

      <div className="cart_seller">
        <div className="cart_image">
          <img
            className="p-8 rounded-t-lg"
            src="images/perfume.png"
            alt="product image"
          />
        </div>
        <div className="cart_body">
          <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
            COCO CHANEL
          </h5>
          <div className="seller_btn">
            <button>Shop Now</button>
          </div>
        </div>
      </div>

      <div className="cart_seller">
        <div className="cart_image">
          <img
            className="p-8 rounded-t-lg"
            src="images/perfume.png"
            alt="product image"
          />
        </div>
        <div className="cart_body">
          <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
            COCO CHANEL
          </h5>
          <div className="seller_btn">
            <button>Shop Now</button>
          </div>
        </div>
      </div>

      <div className="cart_seller">
        <div className="cart_image">
          <img
            className="p-8 rounded-t-lg"
            src="images/perfume.png"
            alt="product image"
          />
        </div>
        <div className="cart_body">
          <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
            COCO CHANEL
          </h5>
          <div className="seller_btn">
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      <div className="cart_seller">
        <div className="cart_image">
          <img
            className="p-8 rounded-t-lg"
            src="images/perfume.png"
            alt="product image"
          />
        </div>
        <div className="cart_body">
          <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
            COCO CHANEL
          </h5>
          <div className="seller_btn">
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      <div className="cart_seller">
        <div className="cart_image">
          <img
            className="p-8 rounded-t-lg"
            src="images/perfume.png"
            alt="product image"
          />
        </div>
        <div className="cart_body">
          <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
            COCO CHANEL
          </h5>
          <div className="seller_btn">
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      <div className="cart_seller">
        <div className="cart_image">
          <img
            className="p-8 rounded-t-lg"
            src="images/perfume.png"
            alt="product image"
          />
        </div>
        <div className="cart_body">
          <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
            COCO CHANEL
          </h5>
          <div className="seller_btn">
            <button>Shop Now</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Bestseller;
