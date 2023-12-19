import React, { useState, useEffect } from "react";
import axios from "axios";
import '../ComponentCSS/bestsaller.css';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [perfumes, setPerfumes] = useState([]);
  const [cart, setCart] = useState(null);
  const [Addedcart, setAddedCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPerfume, setSelectedPerfume] = useState([]);
  const data = { userId: localStorage.getItem('userId') }
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    AddOrder();
  };

  useEffect(() => {
    fetchAllPerfumes();
  }, []);

  useEffect(() => {
    fetchCartByUserId(data.userId._id);
    
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
        `${process.env.REACT_APP_URL}/cart/getByUserId/${data.userId._id}`
      );
      return response; // Return the entire response
    } catch (error) {
      setError(error);
      console.error(error);
      return null; // Return null in case of an error
    }
  };

  const CalculateAmount = () => {
    let amount = 0;
    selectedPerfume.forEach(element => {
      amount += element.price * (1 - element.discount / 100);
    });
    return amount;
  };

  const AddOrder = async () => {
    try {
      const [perfumeResponse] = await Promise.all([
        fetchCartByUserId(data.userId._id),
      ]);
      const fetchedPerfumes = perfumeResponse.data.data?.perfumes || [];
      
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/order/addOrder`,
        {
          perfumes: fetchedPerfumes,
          amount: CalculateAmount(),
          status: "Pending",
          date: new Date(),
          User: data.userId._id,
        }
      );
      console.log("order added");
      toast.success('Order placed successfully! Redirecting to checkout.');
  
      // Wait for a short delay (e.g., 1500 milliseconds or 1.5 seconds)
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowModal(false); // Close the modal before navigating
      navigate("/checkout");
    } catch (error) {
      setError(error);
      toast.error('Error placing the order. Please try again.');
      console.error(error);
    }
  };
  

  const addToCart = async (perfumeId) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/cart/add`,
        {
          User: data.userId._id,
          perfumes: selectedPerfume,
        }
      );
      setAddedCart(response.data.data);

      console.log("added to cart")
    } catch (error) {
      console.log('There was an error fetching add the cart', error);
    }
  };
  const fetchAllPerfumesById = async (perfumeId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/perfume/getPerfumeById/${perfumeId}`
      );

      if (response.data.success) {
        return response.data.data;
      } else {
        console.error("Error fetching perfume data:", response.data.message);
        return null;
      }
    } catch (error) {
      setError(error);
      console.error("Error fetching perfume data:", error);
      return null;
    }
  };
 

  
  const updatePerfumesInCart = async (perfumeId) => {
    try {
      console.log('Updating cart with userId:', data.userId._id);
      console.log('Selected perfumes:', selectedPerfume);
  
      // Ensure that selectedPerfume is not an empty array or null
      if (selectedPerfume && selectedPerfume.length > 0) {
        const response = await axios.put(
          `${process.env.REACT_APP_URL}/cart/updatePerfumes/${data.userId._id}`,
          {
            perfumes: selectedPerfume,
          }
        );
        setAddedCart(response.data.data);
        console.log("updated successfully");
      }
    } catch (error) {
      console.log('There was an error updating the cart', error);
    }
  };
  const openModal = async (perfumeId) => {
    try {
      const [perfumeResponse, cartResponse] = await Promise.all([
        fetchAllPerfumesById(perfumeId),
        fetchCartByUserId(data.userId._id),
      ]);
      const fetchedPerfume = perfumeResponse;
      const fetchedCart = cartResponse.data.data;

      if (fetchedPerfume.stock > 0) {
        // Decrement stock

        if (!fetchedCart) {
          // Cart is empty, create a new cart
          await addToCart(perfumeId);
        } else {
          // Update cart with the decremented stock perfume
          await updatePerfumesInCart(perfumeId);
        }

        setSelectedPerfume([fetchedPerfume]); // Wrap the perfume in an array
        setShowModal(true);
        console.log("user id"+data.userId._id)
        console.log("perfume id"+perfumeId)

        toast.success('Perfume added to cart successfully!');
      } else {
        // Perfume is out of stock
        setShowModal(true);
        toast.warning('This perfume is out of stock.');
      }
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
                  <h3>{perfume.name}</h3>
                  <p>Price: ${perfume.price}</p>
                  <p>Description: {perfume.description}</p>
                  {perfume.stock > 0 ? (
                    <React.Fragment>
                      <button onClick={handleCheckoutClick}>Checkout</button>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {toast.error('This perfume is out of stock.')}
                    </React.Fragment>
                  )}
                </div>
              ))
            ) : (
              <p>No perfume details available.</p>
            )}
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Category;
