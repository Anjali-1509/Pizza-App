import axios from "axios"

export const getAllpizzas=()=> async(dispatch)=>{
dispatch({type: "GET_PIZZAS_REQUEST"})
try{
 const res= await axios.get("http://localhost:8080/pizza/get-pizza")
 dispatch({type:"GET_PIZZAS_SUCCESS", payload: res.data})
}
catch(err){
  dispatch({type : "GET_PIZZAS_FAIL" , payload :err})
}
}