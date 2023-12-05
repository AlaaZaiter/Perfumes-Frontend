import { useState, useEffect } from "react";
import axios from "axios";


const Category = () => {
  const [categorys, setCategories] = useState([]);
  const [perfumes, setPerfumes] = useState([]);
  const [selectCategory, setSelectCategorgy] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchPerfume();
    fetchCategory();
  }, []);

  const fetchPerfume = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/perfume/getAllPerfumes`)
      .then((response) => {
        setPerfumes(response.data.data);
        console.log(response);
      })
      .catch(error);
    setError(error);
  };

  const fetchCategory = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/perfume/filteredPerfume/men`)
      .then((response) => {
        setCategories(response.data.data);
        console.log(response);
      })
      .catch(error);
    setError(error);
  };

  return <div>category</div>;
};

export default Category;
