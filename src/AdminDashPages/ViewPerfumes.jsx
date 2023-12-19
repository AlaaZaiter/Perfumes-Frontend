import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../AdminDashCSS/Viewperfumes.css';
import AddPerfume from "./AddPerfume";
import axios from "axios";

const ViewPerfumes = (props) => {
  const data = props.Data;

  const [activePage, setActivePage] = useState("ViewPerfumes");
  const [perfumes, setPerfumes] = useState([]);
  const [editingPerfume, setEditingPerfume] = useState(null);

  useEffect(() => {
    // Fetch the list of perfumes when the component mounts
    handleFetchPerfumes();
  }, []); // Empty dependency array means it runs only once on mount

  const switchToAddPerfume = () => {
    setActivePage("AddPerfume");
  };

  const handleEditPerfume = (perfume) => {
    setEditingPerfume({ ...perfume }); // Create a copy of the perfume for editing
  };
const handleDeletePerfume= async(perfume_id)=>{
  try {
    const response = await axios.delete(`${process.env.REACT_APP_URL}/perfume/deletePerfumeById/${perfume_id}`)
if(response.status=200){
  console.log ("perfume deleted successfully")
}
  } catch (error) {
console.error(error)    
  }
}
  const handleUpdatePerfume = async () => {
    // Check if the required fields are not empty
    if (!editingPerfume.name || !editingPerfume.price || !editingPerfume.category || !editingPerfume.discount || !editingPerfume.description || !editingPerfume.stock) {
      console.error("Please fill in all the required fields.");
      return;
    }

    try {
      const response = await axios.put(`${process.env.REACT_APP_URL}/perfume/updatePerfume/${editingPerfume._id}`, {
        name: editingPerfume.name,
        price: editingPerfume.price,
        category: editingPerfume.category,
        discount: editingPerfume.discount,
        description: editingPerfume.description,
        stock: editingPerfume.stock,
        image: editingPerfume.image,
      });

      if (response.status === 200) {
        console.log("Perfume updated successfully");
        // After updating, fetch the updated list of perfumes
        handleFetchPerfumes();
        // Reset editingPerfume state
        setEditingPerfume(null);
      } else {
        console.error("Error updating perfume");
      }
    } catch (error) {
      console.error("Error updating perfume:", error);
    }
  };

  const handleFetchPerfumes = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}/perfume/getAllPerfumes`);
      if (response.status === 200) {
        const data = response.data; // Access the data property directly
        setPerfumes(data.data);
      } else {
        console.error("Error fetching perfumes");
        setPerfumes([]);
      }
    } catch (error) {
      console.error("Error fetching perfumes:", error);
      setPerfumes([]);
    }
  };

  const handleInputChange = (e, field) => {
    setEditingPerfume((prevPerfume) => ({
      ...prevPerfume,
      [field]: e.target.value,
    }));
  };

  return (
    <div>
      <button className="AddPerfmueButton" onClick={switchToAddPerfume}>
        Add Perfume
      </button>
      {activePage === "AddPerfume" && <AddPerfume />}
      {activePage === "ViewPerfumes" && (
        <div className="bgcardPerfumes">
          <div className="tableContainer">
            <table border="1" className="tbcourse">
              <thead>
                <tr>
                  <th>Perfume Name</th>
                  <th>Perfume Description</th>
                  <th>Perfume Price</th>
                  <th>Category</th>
                  <th>Discount</th>
                  <th>Perfume Image</th>
                  <th>Stock</th>
                  <th>edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {perfumes.map((perfume) => (
                  <tr key={perfume._id}>
                    <td>
                      {editingPerfume && editingPerfume._id === perfume._id ? (
                        <input
                          type="text"
                          value={editingPerfume.name}
                          onChange={(e) => handleInputChange(e, "name")}
                        />
                      ) : (
                        perfume.name
                      )}
                    </td>
                    <td>
                      {editingPerfume && editingPerfume._id === perfume._id ? (
                        <input
                          type="text"
                          value={editingPerfume.description}
                          onChange={(e) => handleInputChange(e, "description")}
                        />
                      ) : (
                        perfume.description
                      )}
                    </td>
                    <td>
                      {editingPerfume && editingPerfume._id === perfume._id ? (
                        <input
                          type="text"
                          value={editingPerfume.price}
                          onChange={(e) => handleInputChange(e, "price")}
                        />
                      ) : (
                        perfume.price
                      )}
                    </td>
                    <td>
                      {editingPerfume && editingPerfume._id === perfume._id ? (
                        <input
                          type="text"
                          value={editingPerfume.category}
                          onChange={(e) => handleInputChange(e, "category")}
                        />
                      ) : (
                        perfume.category
                      )}
                    </td>
                    <td>
                      {editingPerfume && editingPerfume._id === perfume._id ? (
                        <input
                          type="text"
                          value={editingPerfume.discount}
                          onChange={(e) => handleInputChange(e, "discount")}
                        />
                      ) : (
                        perfume.discount
                      )}
                    </td>
                    <td>
                      {editingPerfume && editingPerfume._id === perfume._id ? (
                        <input
                          type="file"
                          onChange={(e) => handleInputChange(e, "image")}
                        />
                      ) : (
                        perfume.image && <img src={perfume.image} alt="perfume" />
                      )}
                    </td>
                    <td>
                      {editingPerfume && editingPerfume._id === perfume._id ? (
                        <input
                          type="text"
                          value={editingPerfume.stock}
                          onChange={(e) => handleInputChange(e, "stock")}
                        />
                      ) : (
                        perfume.stock
                      )}
                    </td>
                    <td>
                      {editingPerfume && editingPerfume._id === perfume._id ? (
                        <button onClick={handleUpdatePerfume}>
                          Save
                        </button>
                      ) : (
                        <button onClick={() => handleEditPerfume(perfume)}>
                          <img src="images/edit.svg" alt="edit" className="edit_delete" />
                        </button>
                      )}
                    </td>
                    <td>
                      <button onClick={()=>handleDeletePerfume(perfume._id)}>
                        <img src="images/trash-solid.svg" alt="delete" className="edit_delete" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPerfumes;
