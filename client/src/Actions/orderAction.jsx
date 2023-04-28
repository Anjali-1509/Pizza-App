import axios  from "axios"

export const placeOrder = (token ,subtotal)=>async(dispatch, getState)=>{
  dispatch({type:"PLACE_ORDER_REQUEST"})
  const currentUser = getState().loginUserReducer.currentUser
  const cartItems = getState().cartReducer.cartItems
  try{
   const res = await axios.post("http://localhost:8080/orders/placeorder", {
    token,subtotal, currentUser, cartItems
   })
   dispatch({type:"PLACE_ORDER_SUCCESS"})
   console.log(res)
  }
  catch(err){
     dispatch({type:"PLACE_ORDER_FAIL", payload:err})
     console.log(err)
  }
}