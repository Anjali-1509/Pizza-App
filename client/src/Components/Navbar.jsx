import React from 'react'
import {Link} from "react-router-dom"
import {FaPizzaSlice} from "react-icons/fa"
import {useDispatch, useSelector} from "react-redux"


const Navbar = () => {
   const dispatch = useDispatch()
   const cartState = useSelector((state)=>state.cartReducer)

  return (
 
    <div id='navbar-container' className='navbar'>
      
       <div className='logo'>
         <Link>
            <h2>Pizza<span style={{color:"rgb(222,156,33)"}}>licious <FaPizzaSlice color='rgb(212,70,36)' /></span></h2>
         </Link>
       </div>

       <ul>
         <Link to="/">
           <li>HOME</li>
         </Link>

         <Link to="/about">
           <li>ABOUT</li>
         </Link>

         <Link to="/contact">
           <li>CONTACT</li>
         </Link>

         <Link to="/cart">
           <li>CART {cartState.cartItems.length}</li>
         </Link>
       </ul>

    </div>
   
 
  )
}

export default Navbar
