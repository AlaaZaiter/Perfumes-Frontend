import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Products = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [error, setError] = useState(null);
const navigate = useNavigate()

  useEffect(() => {
    getBestSeller();
  }, []);

  const getBestSeller = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/perfume/getAllPerfumes`)
      .then((response) => {
        setPerfumes(response.data.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleShop =() => {
    navigate('/shoppage');
  };

  return (
    <div>
      {error && <p className="error-message">{error.message}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
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
                  {perfume.price}$
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleShop}
                >
                  Shop Now
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
