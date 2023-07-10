import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/SideBar'

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container flex">
                <Sidebar />
                <div className="h-[800px]">Body</div>
            </div>
            <Footer />
        </div>
    )
}

export default App
