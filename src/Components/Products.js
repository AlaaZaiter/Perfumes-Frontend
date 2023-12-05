import { useState, useEffect } from "react";
import axios from "axios";
const Products = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBestSeller();
  }, []);

  const getBestSeller = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/perfume/getAllPerfumes`)
      .then((response) => {
        setPerfumes(response.data.data);
        console.log(response);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div>
      {error && <p className="error-message">{error.message}</p>}
      <div className="w-full max-w-sm border">
        {perfumes.map((perfume) => (
          <div key={perfume.id}>
            {perfume.image && (
              <img
                src={perfume.image}
                className="p-8 rounded-t-lg"
                alt="product image"
              />
            )}
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-center dark:text-black">
                {perfume.name}
              </h5>
              <h5 className="text-x font-semibold tracking-tight dark:text-black">
                {perfume.description}
              </h5>
              <div className="">
                <div className="flex items-center mt-2.5 mb-5">
                  {/* ... other SVG elements */}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-black">
                  {perfume.price}
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
