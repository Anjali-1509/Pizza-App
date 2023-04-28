import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { loginUser } from '../Actions/userAction'
import toast from "react-hot-toast"



const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const loginState = useSelector((state)=>state.loginUserReducer)
  const {loading, success, err} = loginState

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = { email, password }
    dispatch(loginUser(user))
    
  }



  return (
    <div className='main'>
       {success && toast.success("Successfully Logged In") }
       {err && toast.error("Something is Wrong") }
      <div style={{ width: "500px", padding: "30px", background: "white", boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px" }} >
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit} >
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" class="btn">LOGIN</button>
        </form>
      </div>
    </div>
  )
}

export default Login
