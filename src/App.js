import "./App.css";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
      <NavLink>
        <Link to="/"></Link>
      </NavLink>
    </div>
  );
}

export default App;
