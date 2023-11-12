import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <>
            <header>
                <nav>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}

export default MainLayout