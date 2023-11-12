import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function ContactLayout() {
  return (
    <div>
        <h1>Contact</h1>
        <NavLink to={'form'}>form</NavLink>
        <NavLink to={'help'}>help</NavLink>

        <Outlet />
    </div>
  )
}

export default ContactLayout