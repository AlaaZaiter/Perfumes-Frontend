import React, { useState, useEffect } from "react";
import axios from "axios";
import "../ComponentCSS/CategoryModal.css";

const CategoryData = () => {
  const [categories, setCategories] = useState([]);
  const [perfumes, setPerfumes] = useState([]);
  const [cart, setCart] = useState(null);

  const [Addedcart, setAddedCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPerfume, setSelectedPerfume] = useState([]);
  const [userId, setUserId] = useState("657c3641f2e47b5afdd5bc69");

  useEffect(() => {
    fetchAllPerfumes();
  }, []);
  useEffect(() => {
    fetchCartByUserId(userId);
  }, [selectedPerfume]);
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

  const fetchCartByUserId = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/cart/getByUserId/${userId}`
      );
      return response; // Return the entire response
    } catch (error) {
      setError(error);
      console.error(error);
      return null; // Return null in case of an error
    }
  };

  const addToCart = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/cart/add`,
        {
          User: userId,
          perfumes: selectedPerfume,
        }
      );
      setAddedCart(response.data.data);
      console.log("added to cart");
    } catch (error) {
      console.log("There was an error fetching add the cart", error);
    }
  };

  const updatePerfumesInCart = async () => {
    try {
      console.log("Updating cart with userId:", userId);
      console.log("Selected perfumes:", selectedPerfume);

      // Ensure that selectedPerfume is not an empty array or null
      if (selectedPerfume && selectedPerfume.length > 0) {
        const response = await axios.put(
          `${process.env.REACT_APP_URL}/cart/updatePerfumes/${userId}`,
          {
            perfumes: selectedPerfume,
          }
        );
        setAddedCart(response.data.data);
        console.log("updated successfully");
      }
    } catch (error) {
      console.log("There was an error updating the cart", error);
    }
  };

  const fetchAllPerfumesById = async (perfumeId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/perfume/getPerfumeById/${perfumeId}`
      );

      if (response.data.success) {
        return response.data.data; // Return the perfume data
      } else {
        console.error("Error fetching perfume data:", response.data.message);
        return null; // Return null if there's an error
      }
    } catch (error) {
      setError(error);
      console.error("Error fetching perfume data:", error);
      return null; // Return null in case of an error
    }
  };

  const openModal = async (perfumeId) => {
    try {
      // Fetch perfume details and cart concurrently
      const [perfumeResponse, cartResponse] = await Promise.all([
        fetchAllPerfumesById(perfumeId),
        fetchCartByUserId(userId),
      ]);

      // Extract perfume details and cart from responses
      const fetchedPerfume = perfumeResponse;
      const fetchedCart = cartResponse.data.data;

      // Check if the user has a cart
      if (!fetchedCart) {
        // If cart is null, user does not have a cart, so add the item to the cart
        await addToCart();
      } else {
        // If cart is not null, user has a cart, so update the existing cart
        await updatePerfumesInCart();
      }

      // Set the selected perfume and show the modal
      setSelectedPerfume([fetchedPerfume]); // Wrap the perfume in an array
      setShowModal(true);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

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

  return (
    <div>
      <div className=" flex items-center justify-around">
        <div>
      <select value={selectedCategory} onChange={handleSelectChange}>
        <option value="">category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      </div>
<div>
  Search
</div>

</div>
      <h2>Perfumes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center">
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
                  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  onClick={() => openModal(perfume._id)}
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
            <span
              className="close"
              onClick={() => {
                setShowModal(false);
              }}
            >
              &times;
            </span>
            {selectedPerfume && selectedPerfume.length > 0 ? (
              selectedPerfume.map((perfume) => (
                <div key={perfume._id}>
                  {perfume.image && (
                    <img
                      src={perfume.image}
                      className="p-8 rounded-t-lg"
                      alt="product image"
                    />
                  )}
                  <h3>{perfume.name}</h3>
                  <p>Price: {perfume.price}$</p>
                  <p>Description: {perfume.description}</p>
                  <button>Checkout</button>
                </div>
              ))
            ) : (
              <p>No perfume details available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryData;
