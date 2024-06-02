import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Input from "@/shared/ui/input/index.jsx";
import './index.scss'
import Favorites from "@/shared/assets/icons/favorites.svg"
import Cart from "@/shared/assets/icons/cart.svg"

const MainHeader = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className="top-banner">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <div className="underline">
                    <Link to="">ShopNow</Link>
                </div>
            </div>
            <div className="header-container">
                <h1 className="logo">Lichi</h1>
                <nav>
                    <ul className="nav-list">
                        <li>
                            <Link to="/" className={isActive('/') ? 'active' : ''}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className={isActive('/about') ? 'active' : ''}>
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="header-actions">
                    <Input placeholder="What are you looking for?" type="text" icon="search" />
                    <div className="icon-links">
                        <img src={Favorites} alt=""/>
                        <img src={Cart} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainHeader;
