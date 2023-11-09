import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><NavLink to={"/"}>Logo</NavLink></li>
                <li><NavLink to="news">News</NavLink></li>
                <li><NavLink to="corsi">Corsi</NavLink></li>
                <li><NavLink to="tutorial">Tutorial</NavLink></li>
                <li><NavLink to="negozi">Negozi</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;