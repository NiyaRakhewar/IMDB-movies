import "./App.css";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import { MovieDetails } from "./Components/MovieDetails/MovieDetails";
import { Wishlist } from "./Components/Wishlist/Wishlist";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<MovieDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <NavLink>
        <Link to="/"></Link>
      </NavLink>
    </div>
  );
}

export default App;
