import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link  } from "react-router-dom";
import '../ComponentCSS/Login.css'
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
    <div className="flex_login ">
       <div className="column1">
       <h1 className="sig_title"> SIGN IN </h1>
      {error && <p className="error-message">{error}</p>}
         <form onSubmit={handleSubmit}>
            <label className="email-label" >Email</label>
              <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email"
              
              />
            <br></br>
             <label>Password</label>
              <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pass"
             
              />
             <br></br>
             <br></br>
             <button className="Login-Button">Log In</button>
             </form>

         </div>


        <div className="column2">
         <h2 className="login-title"> Luxperfume </h2>
          <p>pick your favourite 
            perfume</p>
           <img  className="loginImage" src="images/loginImage.jpg" alt="image" />
           <p>don't have an account
          {' '}</p>
          <Link to="/register">
           <button className="sign-Up-Button">Sign up</button>
          </Link>
        </div>

</div>
  );
}
export default Login;