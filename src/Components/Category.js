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
  const [userId, setUserId] = useState("65661bf5dbbe672babb84b3a");
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    AddOrder()
    
  };

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

  const CalculateAmount = () => {
    let amount = 0;
    selectedPerfume.forEach(element => {
      amount = element.price * element.discount;
    });
    return amount;
  };

  const AddOrder = async () => {
    const [perfumeResponse] = await Promise.all([
      fetchCartByUserId(userId),
    ]);
    const fetchedPerfumes = perfumeResponse.data.data.perfumes;
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/order/addOrder`,
        {
          perfumes: fetchedPerfumes,
          amount: CalculateAmount(),
          status: "Pending",
          date: new Date(),
          User: userId,
        }
      );
      console.log("order added");
      toast.success('Order placed successfully! Redirecting to checkout...');

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
      toast.success('Perfume added to cart successfully!');
    } catch (error) {
      toast.error('Error adding perfume to cart. Please try again.');
      console.error('There was an error fetching add the cart', error);
    }
  };

  const updatePerfumesInCart = async () => {
    try {
      console.log('Updating cart with userId:', userId);
      console.log('Selected perfumes:', selectedPerfume);

      if (selectedPerfume && selectedPerfume.length > 0) {
        const response = await axios.put(
          `${process.env.REACT_APP_URL}/cart/updatePerfumes/${userId}`,
          {
            perfumes: selectedPerfume,
          }
        );
        setAddedCart(response.data.data);
        toast.success('Perfume added to cart successfully!');
      }
    } catch (error) {
      toast.error('Error adding perfume to cart. Please try again..');
      console.log('There was an error updating the cart', error);
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

  const openModal = async (perfumeId) => {
    try {
      const [perfumeResponse, cartResponse] = await Promise.all([
        fetchAllPerfumesById(perfumeId),
        fetchCartByUserId(userId),
      ]);

      const fetchedPerfume = perfumeResponse;
      const fetchedCart = cartResponse.data.data;

      if (!fetchedCart) {
        await addToCart();
      } else {
        await updatePerfumesInCart();
      }

      setSelectedPerfume([fetchedPerfume]);
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
                  <p>Price: {perfume.price }$</p>
                  <p>Description: {perfume.description}</p>
                  <button onClick={handleCheckoutClick}>Checkout</button>
                </div>
              ))
            ) : (
              <p>No perfume details available.</p>
            )}
          </div>
        </div>
      )}
      <ToastContainer/>
    </div>
  );
};

export default Category;
