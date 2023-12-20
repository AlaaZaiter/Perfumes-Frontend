import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address , setAddress] = useState("");
  const [strengthPassword, setStrengthPassword] =useState('')
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const validateInput = () => {
    if (!fullName) {
      setError("Full name is required >:(");
      return false;
    }
    if (!email) {
      setError("Email is required >:(");
      return false;
    }
    if (!password) {
      setError("Password is required >:(");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long >:(");
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (sessionStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;
    const user = {
      fullName,
      email,
      password,
      address
    };
    
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/user/register`,
        user
      );
      console.log(response.data);
      sessionStorage.setItem("authToken", response.data.data);

      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
    }
  };
  const checkStrengthPassword = (value) => {
    const strongRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    );
    const mediumRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})'
    );

    if (strongRegex.test(value)) {
      setStrengthPassword(`You'r password is` + '  Strong');
    } else if (mediumRegex.test(value)) {
      setStrengthPassword(`You'r password is` + '  Medium');
    } else {
      setStrengthPassword(`You'r password is` + '  Weak');
    }
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    checkStrengthPassword(value);
  };
  return (
    <div className="card">
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>  

        <div className="form-input">
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div> 
        <button type="submit" className="submit-button">
          Register
        </button>
        <p> {strengthPassword}</p>
      </form>
    </div>
  );
}

export default Register;