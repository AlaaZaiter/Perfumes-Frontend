import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../AdminDashCSS/AdminDashboard.css";
import"../AdminDashCSS/Viewperfumes.css";
import { ToastContainer, toast } from 'react-toastify';

const AddSeller = () => {
    const [fullName, setfullName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [address, setaddress] = useState("");
    
    
  
    const handleAddPerfume = async () => {
      // Check if the required fields are not empty
      if (!fullName || !email || !password || !address  ) {
        console.error("Please fill in all the required fields.");
        toast.error("Please fill in all the required fields")
        return;
      }else{

        try {
            const response = await axios.post(`${process.env.REACT_APP_URL}/user/addSeller`, {
              fullName,
              email,
              password,
              address,
              role: "seller", // Set the role to "seller"
            });
      
            if (response.status === 200) {
              console.log("Seller added successfully");
              toast.success("Seller added successfully");
              // Optionally, you can redirect to a different page or perform other actions upon successful addition.
            } else {
              console.error("Error adding seller");
              toast.error("Error adding seller");
            }
          } catch (error) {
            console.error("Error adding seller:", error);
            toast.error("Error adding seller");

          }

      }
   
      
  
    
    };
  return (
    <div className="bgcardPerfumes">
        <form className="AddPerfumeForm">
        <p>Full Name</p>
      <input type="text" value={fullName} placeholder="Full Name" onChange={(e)=>setfullName(e.target.value)}/>
      <p>Email</p>
      <input type="text" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
      <p>Password</p>
      <input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
      <p>Address</p>
      <input type="text" placeholder="Address" value={address} onChange={(e)=>setaddress(e.target.value)}/>
      
      <button onClick={handleAddPerfume}>save</button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default AddSeller;
