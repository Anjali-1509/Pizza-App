import React from 'react'
import {Link} from "react-router-dom"
import {FaPizzaSlice} from "react-icons/fa"
import {useDispatch, useSelector} from "react-redux"
import { logoutUser } from '../Actions/userAction'


const Navbar = () => {
   const dispatch = useDispatch()
   const cartState = useSelector((state)=>state.cartReducer)
   const userState = useSelector((state)=>state.loginUserReducer)
   const {loggedInUser} = userState
   console.log(userState)

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

         {
          loggedInUser ?
          <>
           <Link><li>{loggedInUser.name.toUpperCase()}</li></Link>
          <Link><li onClick={()=>dispatch(logoutUser())}>LOGOUT</li></Link>
          </>
           :
          <>
          <Link to="/registeration">
           <li>SIGNIN</li>
         </Link>

         <Link to="/login">
           <li>LOGIN</li>
         </Link>
          </>
         }

         

         <Link to="/cart">
           <li>CART {cartState.cartItems.length}</li>
         </Link>
       </ul>

    </div>
   
 
  )
}

export default Navbar
