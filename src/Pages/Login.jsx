import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link  } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const validateInput = () => {
    if (!email || !password) {
      setError("Email and Password are required");
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
  
    try {
      const response = await axios.post(`${process.env.REACT_APP_URL}/user/login`, {
        email,
        password,
      });

      if (response.data && response.data.data) {
        const token = response.data.data;
        sessionStorage.setItem("authToken", token);
        localStorage.setItem('authToken', token);
        navigate("/");
        
      } else {
        setError("Invalid response from server");
      }
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h2> Login   </h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=""
          />
        </div>
        <button type="submit" className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]">
         login
        </button> 
        <p>
  Create an account{' '}
  <Link to="/register">
    <button>Register</button>
  </Link>
</p>
      </form>
    </div>
  );
}
export default Login;