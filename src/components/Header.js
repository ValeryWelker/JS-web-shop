import React from 'react'
import '../styles/Header.css';
import {Outlet } from 'react-router-dom';
import Home from "../Pages/Home"
import Categories from "../Pages/Categories"
import All_products from "../Pages/All_products"


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';


export default function Header() {
  return (
    <header>
        <Router>
            {/* Ссылки на компоненты-страниц Home и About */}
            <div className='header_block'>
                <img id='logo_pic' src="/images/logo.svg"></img>
                <ul id='ui_header_menu'>
                <li>
                    <Link to='/Home'>Main Page</Link>
                </li>
                <li>
                    <Link to='/Categories'>Categories</Link>
                </li>
                <li>
                    <Link to='/All_products'>All products</Link>
                </li>
                <li>
                    <Link to='/All_sales'>All sales</Link>
                </li>
                </ul>
                <a href='/Cart'><img id='cart_pic' src='/images/basket=empty.svg'></img></a>
                
            </div>
            <Routes>
                <Route path="/" element={<Home/> } />
                <Route path="/Home" element={<Home/> } />
                <Route path="/Categories" element={<Categories/> } />
                <Route path="/All_products" element={<All_products/> } />
            </Routes>   

        </Router>
        <Outlet />
    </header>
  )
}
