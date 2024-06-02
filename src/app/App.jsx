import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./index.scss"
import Contacts from "@/pages/contacts/index.jsx";
import About from "@/pages/about/index.jsx";
import Home from "@/pages/home/index.jsx";
import AllProducts from "@/pages/all-products/index.jsx";
import OneProduct from "@/pages/one-product/index.jsx";

// Lazy load the default layout component

const App = () => {
    return (
        <div className={'container mx-auto p-6' }>
            <Suspense fallback={<div>Loading...</div>}>
                <Router>
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/contact'} element={<Contacts/>}/>
                        <Route path={'/about'} element={<About/>}/>
                        <Route path={'/all'} element={<AllProducts/>}/>
                        <Route path={'/all/product/:id'} element={<OneProduct/>}/>
                    </Routes>
                </Router>
            </Suspense>
        </div>

    );
};

export default App;
