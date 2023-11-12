import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
    return (
        <div>404 Oops! Page not found! <NavLink to={'/'}>back home</NavLink></div>
    )
}

export default NotFound