import React from 'react'
import { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { registerUser } from '../Actions/userAction'
import toast from "react-hot-toast"

const Registeration = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const dispatch = useDispatch()
    const userState= useSelector((state)=>state.registerUserReducer)
    const {success, err}= userState

    const handleSubmit=(e)=>{
    e.preventDefault()
    if(password!== confirmPassword){
        alert("Password Does Not Match :(")
    }
    else{
      const user = {name, email, phone, password, confirmPassword} 
      dispatch(registerUser(user))
    }
    }

    return (
        <div className="main">
            {success &&  toast.success("Registered Successfully")}
            {err && toast.error("Something is Wrong")}
            <div style={{ width: "500px", padding: "30px", background: "white", boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px" }} className="container">
                <h1>REGISTER</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" placeholder='Enter Your Name' className="form-control" id="exampleInputName" aria-describedby="nameHelp"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <input type="email" placeholder='Enter Your Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <input type="number" placeholder='Enter Your Phone Number' className="form-control" id="exampleInputNumber" aria-describedby="emailHelp"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <input type="password" placeholder='Enter Password' className="form-control" id="exampleInputPassword1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <input type="password" placeholder='Confirm Password' className="form-control" id="exampleInputPassword1"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn">REGISTER</button>
                </form>
            </div>

        </div>
    )
}

export default Registeration
