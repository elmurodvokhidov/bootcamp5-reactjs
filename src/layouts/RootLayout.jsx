import { Outlet } from 'react-router-dom'
import Navbar from '../pages/Navbar'

function RootLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default RootLayout