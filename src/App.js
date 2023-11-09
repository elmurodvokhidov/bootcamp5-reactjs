import About from "./pages/About";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>
          <NavLink to="/about">about</NavLink> <br />
          <NavLink to="/contact">contact</NavLink>
        </h1>
        <h1>Home Page</h1>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <h1>Footer</h1>
      </div>
    </Router>
  );
}

export default App;
