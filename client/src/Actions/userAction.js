import axios from "axios"

export const registerUser =(user)=>async(dispatch)=>{
  dispatch({type:"USER_REGISTER_REQUEST"})
  try{
   const res = await axios.post("http://localhost:8080/user/register", user)
   dispatch({type:"USER_REGISTER_SUCCESS"})
  }
  catch(err){
    dispatch({type:"USER_REGISTER_FAIL",payload : err})
  }
}


export const loginUser = (user)=>async(dispatch)=>{
  dispatch({type:"USER_LOGIN_REQUEST"})
  try{
   let res = await axios.post("http://localhost:8080/user/login",user)
   console.log(res)
   dispatch({type:"USER_LOGIN-SUCCESS", payload : res.data})
   localStorage.setItem("loggedInUser", JSON.stringify(res.data))
   window.location.href="/"
  }
  catch(err){
    dispatch({type:"USER_LOGIN_FAIL",payload : err})
  }
}