import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./componets/Footer";
import Navbar from "./componets/Navbar";
import Home from "./pages/Home";
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';

const MainComponent = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                    <main>
                        <Routes>
                                <Route path='/' Component={Home} />
                                <Route path='/about' Component={About} />
                                <Route path='/products' Component={Product} />
                                <Route path='/contact' Component={Contact} />
                        </Routes>
                    </main>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default MainComponent;
