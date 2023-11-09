import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <figure className="logo"><img src="./img/logo.jpg" alt="logo" /></figure>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'add'}>Add new</NavLink></li>
                <li><NavLink to={'profile'}>Profile</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar