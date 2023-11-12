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

function App() {

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favourite" element={<Favourite />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product" element={<Product />} />
        <Route path="stores" element={<Stores />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;