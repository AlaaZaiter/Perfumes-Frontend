import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../AdminDashCSS/Viewperfumes.css';
import AddSeller from "./AddSeller";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ViewSellers = () => {
  const [activePage, setActivePage] = useState("ViewSellers");
  const [sellers, setSellers] = useState([]);
  const [editingSeller, setEditingSeller] = useState(null);

  useEffect(() => {
    // Fetch the list of sellers when the component mounts
    handleFetchSellers();
  }, []); // Empty dependency array means it runs only once on mount

  const switchToAddSeller = () => {
    setActivePage("AddSeller");
  };

  const handleEditSeller = (seller) => {
    setEditingSeller({ ...seller }); // Create a copy of the seller for editing
  };

  const handleDeleteSeller = async (sellerId) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_URL}/user/delete/${sellerId}`);
      if (response.status === 200) {
        toast.success("Seller deleted S !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        // After deleting, fetch the updated list of sellers
        handleFetchSellers();
      }
    } catch (error) {
      console.error("Error deleting seller:", error);
    }
  };

  const handleUpdateSeller = async () => {
    // Check if the required fields are not empty
    if (!editingSeller.fullName || !editingSeller.password || !editingSeller.email || !editingSeller.address) {
      console.error("Please fill in all the required fields.");
      return;
    }

    try {
      const response = await axios.put(`${process.env.REACT_APP_URL}/user/update/${editingSeller._id}`, {
        fullName: editingSeller.fullName,
        password: editingSeller.password,
        email: editingSeller.email,
        address: editingSeller.address,
      });

      if (response.status === 200) {
        console.log("Seller updated successfully");
        // After updating, fetch the updated list of sellers
        handleFetchSellers();
        // Reset editingSeller state
        setEditingSeller(null);
      } else {
        console.error("Error updating seller");
      }
    } catch (error) {
      console.error("Error updating seller:", error);
    }
  };

  const handleFetchSellers = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}/user/get`);
      if (response.status === 200) {
        const data = response.data; // Access the data property directly
        setSellers(data.data.filter(user => user.role === "seller"));
      } else {
        console.error("Error fetching sellers");
        setSellers([]);
      }
    } catch (error) {
      console.error("Error fetching sellers:", error);
      setSellers([]);
    }
  };

  const handleInputChange = (e, field) => {
    setEditingSeller((prevSeller) => ({
      ...prevSeller,
      [field]: e.target.value,
    }));
  };

  return (
    <div>
      <button className="AddPerfmueButton" onClick={switchToAddSeller}>
        Add Seller
      </button>
      {activePage === "AddSeller" && <AddSeller />}
      {activePage === "ViewSellers" && (
        <div className="bgcardPerfumes">
          <div className="tableContainer">
            <table border="1" className="tbcourse">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {sellers.map((seller) => (
                  <tr key={seller._id}>
                    <td>
                      {editingSeller && editingSeller._id === seller._id ? (
                        <input
                          type="text"
                          value={editingSeller.fullName}
                          onChange={(e) => handleInputChange(e, "fullName")}
                        />
                      ) : (
                        seller.fullName
                      )}
                    </td>
                   
                    <td>
                      {editingSeller && editingSeller._id === seller._id ? (
                        <input
                          type="text"
                          value={editingSeller.email}
                          onChange={(e) => handleInputChange(e, "email")}
                        />
                      ) : (
                        seller.email
                      )}
                    </td>
                    <td>
                      {editingSeller && editingSeller._id === seller._id ? (
                        <input
                          type="text"
                          value={editingSeller.address}
                          onChange={(e) => handleInputChange(e, "address")}
                        />
                      ) : (
                        seller.address
                      )}
                    </td>
                    <td>
                      {editingSeller && editingSeller._id === seller._id ? (
                        <button onClick={handleUpdateSeller}>
                          Save
                        </button>
                      ) : (
                        <button onClick={() => handleEditSeller(seller)}>
                          <img src="images/edit.svg" alt="edit" className="edit_delete" />
                        </button>
                      )}
                    </td>
                    <td>
                      <button onClick={() => handleDeleteSeller(seller._id)}>
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

export default ViewSellers;
/*{
  "order": 1,
  "perfumes": ["perfume1", "perfume2"],
  "amount": 100.50,
  "status": "Pending",
  "date": "2023-12-05T12:00:00.000Z",
  "User": "user_id_here", 
  "Payment": "payment_id_here" // Replace with a valid payment ID
}

*/ 