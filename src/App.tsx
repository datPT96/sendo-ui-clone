import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import ProductContextProvider from './contexts/ProductContext'
import ActionContextProvider from './contexts/ActionContext'

function App() {
    return (
        <div className="App">
            <ProductContextProvider>
                <ActionContextProvider>
                    <Header />
                    <Body />
                    <Footer />
                </ActionContextProvider>
            </ProductContextProvider>
        </div>
    )
}

export default App
