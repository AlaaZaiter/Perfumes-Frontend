  import React, { useState, useEffect } from "react";
  import axios from "axios";
import '../ComponentCSS/bestsaller.css'
  const Category = () => {
    const [categories, setCategories] = useState([]);
    const [perfumes, setPerfumes] = useState([]);
    const [cart, setCart] = useState([]) 
    const [selectedCategory, setSelectedCategory] = useState("");
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedPerfume, setSelectedPerfume] = useState(null);
    const [price, setPrice] = useState(0);
const [name, setName] = useState("")
    useEffect(() => {
      fetchAllPerfumes();
    }, [selectedCategory]);

    const fetchAllPerfumes = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL}/perfume/getAllPerfumes`
        );

        setPerfumes(response.data.data);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };

    useEffect(() => {
      const extractedCategories = perfumes.reduce((acc, perfume) => {
        acc.push(...perfume.category);
        return acc;
      }, []);

      const uniqueCategories = Array.from(new Set(extractedCategories));
      setCategories(uniqueCategories);
    }, [perfumes]);

    const handleSelectChange = async (event) => {
      const selectedCategory = event.target.value;
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL}/perfume/categories/${selectedCategory}`
        );
        const filteredPerfumes = response.data.data.map((perfume) => ({
          ...perfume,
          category: [selectedCategory],
        }));
        setPerfumes(filteredPerfumes);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };


    const addToCart= async () => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_URL}/cart/add`);
        setCart(response.data); 
      } catch (error) {
        console.log('There was an error fetching the cart', error);
      }
    };
  

    const openModal = (Perfumes) => {
    setSelectedPerfume(Perfumes);
      setShowModal(!showModal);
    };
  
   
    return (
      <div>
        <h2>Categories</h2>
        <select value={selectedCategory} onChange={handleSelectChange}>
          <option value="">Select a category</option>

          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <h2>Perfumes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center ">
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
                <div className="flex items-center justify-between">
                  <button
                    class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    onClick={openModal}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
            <span className="close"  
            onClick={() => {
                setShowModal(false);
              }}>
              &times;
            </span>
            
            {perfumes.id}
            <button onClick={() => addToCart(selectedPerfume)}>
              Check Out
            </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default Category;
