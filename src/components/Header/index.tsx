import React from 'react'
import TopNavbar from './Navbar/TopNavbar'
import BottomNavbar from './Navbar/BottomNavbar'

const Header = () => {
    return (
        <div className="header">
            <div>
                <TopNavbar />
            </div>
            <BottomNavbar />
        </div>
    )
}

export default Header
