import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import  { Toaster } from 'react-hot-toast';
const Layout = () => {
  return (
    <>
     <Navbar/> 
     <Outlet/>
     <Toaster /> 
     <Footer/> 
    </>
  )
}

export default Layout
