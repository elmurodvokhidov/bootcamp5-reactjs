import { Route, Routes } from "react-router-dom";
import "./Main.css";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import Cart from "./pages/Cart";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Product from "./pages/Product";
import Stores from "./pages/Stores";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import { useContext } from "react";
import { ContextData } from "./context/Context";
import Profile from "./pages/Profile";

function App() {

  const { location } = useContext(ContextData);

  return (
    <div className="App">
      {location.pathname !== '/register' ? <Navbar /> : null}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favourite" element={<Favourite />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product" element={<Product />} />
        <Route path="stores" element={<Stores />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
      </Routes>

      {location.pathname !== '/register' ? <Footer /> : null}
    </div>
  );
}

export default App;