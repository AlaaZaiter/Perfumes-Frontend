import React from 'react';
import '../ComponentCSS/Category.css';
const Category = () => {
  return (
    <div>
      <h2 className='CategoryTitle content'>Category of Fragrance</h2>
      <div className="containerAs">
        <div className="elementAs">
          <a href="#" className="view-products">
            Floral
          </a>
        </div>
        <div className="elementBs">
          <a href="#" className="view-products">
            Woody
          </a>
        </div>
        <div className="elementCs">
          <a href="#" className="view-products">
            Citrus
          </a>
        </div>
      </div>
      <div className="containerAa">
        <div className="elementAa">
          <h2 className="wea">We have a wide range of products</h2>
          <p className="oua">
            Our collection boasts a diverse spectrum of scents that cater to every olfactory desire. From the timeless
            elegance of floral bouquets to the rich depth of woody undertones, our selection spans an array of
            fragrances that evoke sophistication, allure, and individuality.
          </p>
          <a href="#" className="view-productsa">
            view products
          </a>
        </div>
        <div className="elementBa">
          <img src="/images/Rectangle 15.png" alt="Rectangle 15" className="rec15" />
        </div>
        <div className="elementCa">
          <img src="/images/Rectangle 16.png" alt="Rectangle 16" className="rec16" />
        </div>
        <div className="elementDa">
          <img src="/images/Rectangle 17.png" alt="Rectangle 17" className="rec17" />
        </div>
      </div>
    </div>
  );
};

export default Category;
