import { useEffect, useState } from "react";
import "../ComponentCSS/Header.css";
import { useNavigate, Link } from "react-router-dom";
import { getUserID } from "../Util/userData";

const Headercontainer = () => {
  const [userID, setUserID] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem("authToken"));
  }, []);
  const handleLogin = () => {
    setUserID(getUserID());
    setLoggedIn(true);
    navigate("/login");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    localStorage.removeItem("authToken");
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <div>
      <nav className="flex items-center justify-around mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <ul className="left-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <a href="/shop">Category</a>
          </li>
        </ul>
        <div className="svg">
          <svg
            width="170"
            height="90"
            viewBox="0 0 171 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.241709 7.53134e-06C0.184938 20.0369 9.08578 39.2786 24.9862 53.492C40.8865 67.7055 62.7584 85.4844 85.3017 85.5483C107.845 85.6122 129.213 67.9557 145.194 53.8326C161.175 39.7095 170.184 20.5186 170.241 0.481687L85.2414 0.24084L0.241709 7.53134e-06Z"
              fill="#CEB5B3"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="svg-text"
            >
              Luxperfume
            </text>
          </svg>
        </div>
        <ul className="right-nav">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {" "}
            <button
              className="login-button"
              onClick={loggedIn ? handleLogout : handleLogin}
            >
              {loggedIn ? "Logout" : "Login"}
            </button>{" "}
          </li>
        </ul>

        <div className="burger-menu" onClick={handleMenuClick}>
          <div className={isMenuOpen ? "line active" : "line"}></div>
          <div className={isMenuOpen ? "line active" : "line"}></div>
          <div className={isMenuOpen ? "line active" : "line"}></div>
          <ul className={`mobile-nav ${isMenuOpen ? "show" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href="#">Category</a>
            </li>
            <li>
              {" "}
              <button
                className="login-button"
                onClick={loggedIn ? handleLogout : handleLogin}
              >
                {loggedIn ? "Logout" : "Login"}
              </button>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Headercontainer;