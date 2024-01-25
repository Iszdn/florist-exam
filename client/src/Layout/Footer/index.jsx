import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer id='footer'>
      <div className="container">
        <div className="top-footer">
        <div className="logo">
          <img src="https://preview.colorlib.com/theme/florist/img/logo.png" alt="" />
        </div>
        <p>The floristry business has a significant market in the corporate and social event world, as flowers</p>
        <div className="sosials">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
      <div className="midle-foot">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-12">
<h3>Company</h3>
<ul>
  <li>About us</li>
  <li>Servcies</li>
  <li>Contact us</li>
</ul>
          </div>
          <div className="col-lg-3 col-md-4 col-12">
<h3>Account</h3>
<ul>
  <li>About us</li>
  <li>Servcies</li>
  <li>Contact us</li>
</ul>
          </div>
          <div className="col-lg-3 col-md-4 col-12">
<h3>Newletter</h3>
<p>Subcribe to our newsletter to get more free tips. No Spam, Promise.</p>
<div className="form">
  <input type="text"  placeholder='Email'/>
  <Link>SUBSCRIBE</Link>
</div>

          </div>
          <div className="col-lg-3 col-md-4 col-12">
<h3>Get in touch</h3>
<ul>
  <li>69 North Cleveland Street, Memphis,USA.</li>
  <li>(123) 8111 9210 - (012) 1111 6868</li>
  <li>Florisr@supportthem.com</li>
</ul>
          </div>
        </div>
      </div>
      <p className='text-center bot'>Copyright ©2024 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i>  by <Link>Colorlib</Link> </p>
      </div>
      
    </footer>
  )
}

export default Footer
