import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import CartPage from '../Pages/CartPage'
import Registeration from '../Pages/Registeration'
import Login from '../Pages/Login'


const Rout = () => {
  return (
    <div>
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/registeration" element={<Registeration />} />
         <Route path="/login" element={<Login />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
         <Route path="/cart"  element={<CartPage />} />
       </Routes>
    </div>
  )
}

export default Rout
