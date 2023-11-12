import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function RootLayouts() {
  return (
    <>
        <header>
            <nav>
                <NavLink to={'/'}>home</NavLink>
                <NavLink to={'about'}>about</NavLink>
                <NavLink to={'contact'}>contact</NavLink>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer></footer>
    </>
  )
}

export default RootLayouts