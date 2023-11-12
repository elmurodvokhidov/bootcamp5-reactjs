import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <NavLink to={'/'}>home</NavLink>
            <NavLink to={'/about'}>about</NavLink>
            <NavLink to={'/contact'}>contact</NavLink>
        </div>
    )
}

export default Navbar