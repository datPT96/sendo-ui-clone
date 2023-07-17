import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import ProductContextProvider from './contexts/ProductContext'

function App() {
    return (
        <div className="App">
            <ProductContextProvider>
                <Header />
                <Body />
                <Footer />
            </ProductContextProvider>
        </div>
    )
}

export default App
