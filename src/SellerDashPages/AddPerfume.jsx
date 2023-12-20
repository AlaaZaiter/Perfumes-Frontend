import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../AdminDashCSS/AdminDashboard.css';
import '../AdminDashCSS/Viewperfumes.css';

const AddPerfume = () => {
  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const [category, setcategory] = useState('');
  const [discount, setdiscount] = useState('');
  const [image, setimage] = useState(null);
  const [description, setdescription] = useState('');
  const [stock, setstock] = useState('');

  const handleAddPerfume = async () => {
    // Check if the required fields are not empty
    if (!name || !price || !category || !discount || !image || !description || !stock) {
      toast.error("Please fill in all the required fields PLEASE.");
      return;
    }

    const PerfumeData = new FormData();
    PerfumeData.append('name', name);
    PerfumeData.append('price', price);
    PerfumeData.append('category', category);
    PerfumeData.append('discount', discount);
    PerfumeData.append('image', image);
    PerfumeData.append('description', description);
    PerfumeData.append('stock', stock);

    try {
      const response = await axios.post(`${process.env.REACT_APP_URL}/perfume/addPerfume`, PerfumeData);

      if (response.status === 200) {
        toast.success("Perfume added successfully");
        console.log('Perfume added successfully');
      } else {
        console.error('Error adding the perfume.');
        toast.error("Error adding the perfume.");
      }
    } catch (error) {
      console.error('Error during perfume addition:', error);
      toast.error("Error during perfume addition");
    }
  };

  return (
    <div className="bgcardPerfumes">
      <form className="AddPerfumeForm">
        <p>Perfume Name</p>
        <input
          type="text"
          placeholder="Perfume Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <p>Perfume Price</p>
        <input
          type="text"
          placeholder="Perfume Price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        <p>Category</p>
        <input
          type="text"
          placeholder="Perfume Category"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        />
        <p>Discount</p>
        <input
          type="text"
          placeholder="Perfume Discount"
          value={discount}
          onChange={(e) => setdiscount(e.target.value)}
        />
        <p>Perfume Image</p>
        <input
          type="file"
          placeholder="Perfume Image"
          onChange={(e) => setimage(e.target.files[0])}
        />
        <p>Perfume Description</p>
        <textarea
          placeholder="Perfume Description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        ></textarea>
        <p>Perfume Stock</p>
        <input
          type="text"
          placeholder="Perfume Stock"
          value={stock}
          onChange={(e) => setstock(e.target.value)}
        />
        <button type="button" onClick={handleAddPerfume}>
          Save
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default AddPerfume;
