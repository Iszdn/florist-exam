import React, { useContext, useState } from 'react'
import "./index.scss"
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { NavLink } from 'react-router-dom'
import { WishlistContext } from '../../context/WishlistContext';
import { BasketContext } from '../../context/BasketContext';
const Navbar = () => {
  const {wish} = useContext(WishlistContext)
    const {basket} = useContext(BasketContext)
  const [open, setOpen] = useState(false)
  function handleOpen() {
    setOpen(!open)
  }
  return (
    <nav id='navbar'>
      <div className="container">
        <div className="nav">
        <div className="logo">
          <img src="https://preview.colorlib.com/theme/florist/img/logo.png" alt="" />
        </div>
        <div className="navigations">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/shop">shop</NavLink>
            </li>
            <li>
              <NavLink to="/pages">pages</NavLink>
            </li>
            <li>
              <NavLink to="/blog">blog</NavLink>
            </li>
            <li>
              <NavLink to="/add">admin</NavLink>
            </li>
          </ul>
        </div>
        <div className="icons">
<span><IoSearchOutline /></span>
<span><NavLink className="ico" to="/wish"><GoHeart /></NavLink>({wish.length})</span>
<span><NavLink  className="ico" to="/basket"><IoCartOutline /></NavLink>({basket.length})</span>
        </div>
        <div onClick={()=>handleOpen()} className="bar ">
        <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      </div>
      <div className={`nav-media ${open ? "active-nav" : ""}`}>
        <div onClick={()=>handleOpen()} className="close">
        <i className="fa-solid fa-xmark"></i>
        </div>

      <div className="navigations">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/shop">shop</NavLink>
            </li>
            <li>
              <NavLink to="/pages">Pages</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/add">admin</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
