import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { BsFillCartFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
import "../../App.css"
import { useState, useEffect } from 'react';
import {useSelector } from 'react-redux';


const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 56) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // ///////////////////  Getting categories/////////////////

  const products = useSelector((state) => state.products.data);
  const categories = [];
  products.map((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category)
    }
  })






  return (

    <nav className={scrolled ? 'navbar-scrolled navbar navbar-expand-lg navbar-dark p-3' : 'navbar navbar-expand-lg navbar-dark p-3'} id="nav">
      <div className="container">
        <NavLink to="/ " className="navbar-brand my-auto text-light">Fake<span className='primary brand-color'>Store</span></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-5 my-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link mx-2" activeclassname="active" aria-current="page">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/shop" className="nav-link mx-2" activeclassname="active">Shop</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                {categories.map((item) => {
                  return (
                    <Link to={`/shop/${item}`} key={item}>
                      <li><a className="dropdown-item item-dropdown">{item}</a></li>
                      </Link>
                  )
                })}


              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto d-lg-inline-flex my-auto icons">
            <li className="nav-item mx-3">
              <Link to="/" className="nav-link text-light h5">{<FaFacebook />}</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/" className="nav-link text-light h4">{<AiFillTwitterCircle />}</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/cart" className="nav-link text-light h5">{<BsFillCartFill />}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  )
}

export default Header;
