import { useState, useEffect } from "react";
import axios from "axios";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [perfumes, setPerfumes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState(null);
const [category, setCategory] = useState('')
  useEffect(() => {
    fetchCategories(category);
    fetchAllPerfumes();
  }, [category]);

  const fetchCategories = (category) => {
    console.log((`${process.env.REACT_APP_URL}/perfume/categories/${category}`))
    axios.get(`${process.env.REACT_APP_URL}/perfume/categories/${category}`)
      .then((response) => {
        console.log("catogery" , response);
        setCategories(response.data.data);
      })
      .catch((error) => {
        setError(error);
        console.error(error);
      });
  };

  const fetchAllPerfumes = () => {
    axios.get(`${process.env.REACT_APP_URL}/perfume/getAllPerfumes`)
      .then((response) => {
        setPerfumes(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        setError(error);
        console.error(error);
      });
  };

  const handleSelectChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    fetchAllPerfumes(selectedCategory);
  };

  return (
    <div>
      <h2>Categories</h2>
      <select value={selectedCategory} onChange={handleSelectChange}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <optgroup key={category._id} value={category.category}>
             <option>{category.category}</option>  
           {category.name}
          </optgroup>
        ))}
      </select>

      <h2>Perfumes</h2>
      <ul>
        {perfumes.map((perfume) => (
          <div key={perfume._id}>
            <h1>{perfume.name}</h1>
            <h1>{perfume.description}</h1>
            </div>
        ))}
      </ul>
    </div>
  );
};

export default Category;
