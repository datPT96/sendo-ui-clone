import React from 'react'
import TopNavbar from './Navbar/TopNavbar'
import BottomNavbar from './Navbar/BottomNavbar'

const Header = () => {
    return (
        <>
            <div className="top-header">
                <TopNavbar />
            </div>
            <div className="bottom-headr sticky top-0 z-50">
                <BottomNavbar />
            </div>
        </>
    )
}

export default Header
