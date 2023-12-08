import Header from "./Components/Header";
import Register from "./Pages/Register";
import Login from "./Pages/Login"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={<Header/> }
        />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
