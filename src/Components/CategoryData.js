import  { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserID } from "../Util/userData";
import "../ComponentCSS/CategoryModal.css";

const CategoryData = () => {
  const [categories, setCategories] = useState([]);
  const [perfumes, setPerfumes] = useState([]);
  const [Addedcart, setAddedCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPerfume, setSelectedPerfume] = useState([]);
  const [search , setSearch] = useState("")

  useEffect(() => {
    fetchAllPerfumes();
    // addToCart();
  }, []);
  useEffect(() => {
    // fetchCartByUserId(userID);
  }, [selectedPerfume]);

// to filter category
  useEffect(() => {
    const extractedCategories = perfumes.reduce((acc, perfume) => {
      acc.push(...perfume.category);
      return acc;
    }, []);
    const uniqueCategories = Array.from(new Set(extractedCategories));
    setCategories(uniqueCategories);
  }, [perfumes]);

// get category
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

//  fetch all perfumes 
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

// open modal
  const openModal = async (perfumeId) => {
    try {
      const perfumeResponse = await fetchAllPerfumesById(perfumeId);
      const fetchedPerfume = perfumeResponse;
      setSelectedPerfume([fetchedPerfume]);
      setShowModal(true);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };
  // to add to cart
  const addToCart = async () => {
    const userID = getUserID();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/cart/add`,
        {
          User: userID, 
          perfumes: selectedPerfume,
        }
      );
      setAddedCart(response.data.data);
      // console.log("added to cart");
      toast.success('Added to cart successfully');
      // console.log('user'+ userID);
    } catch (error) {
      console.error("There was an error adding to the cart", error);
      toast.error('Failed to add to cart you have to be logged in');
    }
  };
  
  // order
 
  
// get all perfume
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
//



// search
  const fsearchPerfume = useMemo(() => {
    return perfumes.filter((perfume) => {
      if (!search) return true;
      const categoryMatches = perfume.category.some(
        (category) =>
          category.toLowerCase().includes(search.toLowerCase())
      );
      return (
        perfume.name.toLowerCase().includes(search.toLowerCase()) || categoryMatches
      );
    });
  }, [search, perfumes]);
  

  return (
    <div className="m-5">
      <div className=" flex items-center justify-around  category_container">
        <div>
      <select value={selectedCategory} onChange={handleSelectChange}  className="category_select">
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      </div>
<div  className="category_search">
  <input
          type="text"
          placeholder="Search by name"
          className={"input"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
</div>

</div>
      <h2>Perfumes</h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 justify-center"> */}
      <div className="grid justify-center md:grid-cols-3  gap-3">

        {fsearchPerfume.map((perfume) => (
          <div key={perfume.id} className="cart_seller_category">
            {perfume.image && (
              <div className="cart_image_category">
              <img
                src={perfume.image}
                alt="product image"
              />
              </div>
            )}
            <div className="cart_body_category">
              <h4>
                {perfume.name}
              </h4>
              <div className="seller_btn_category">
                <button
                  type="button"
                  onClick={() => openModal(perfume._id)}
                >
                  Read More
                </button>
              </div>
            </div>
            </div>
          // </div>
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
                <div key={perfume._id} className="perfume_content">
                  {perfume.image && (
                    <img
                      src={perfume.image}
                      className="p-8 rounded-t-lg"
                      alt="product image"
                    />
                  )}
                  <h1 className="perfume_name">{perfume.name}</h1>
                  <p className="perfume_description">{perfume.description}</p>
                  <p className="perfume_price"> {perfume.price}$</p>
                  <div className="flex gap-5">
                  <button className="perfume_btn"> <Link to='/checkout'> Check Out</Link></button>
                  <button className="perfume_btn" onClick={addToCart}>Add to Cart</button>
                  </div>
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
