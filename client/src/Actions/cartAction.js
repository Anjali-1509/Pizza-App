export const addToCart = (data, quantity, varient)=>(dispatch, getState)=>{
var cartItem = {
    name : data.name,
    id:data._id,
    image:data.image,
    varient:varient,
    quantity:Number(quantity),
    prices:data.prices,
    price : data.prices[0][varient]*quantity

}
if(cartItem.quantity>10){
 alert("You Can Only Add Ten Pizzas In The Cart.")
}
dispatch({type:"ADD_TO_CART", payload:cartItem})
localStorage.setItem("cartItems", JSON.stringify(getState().cartReducer.cartItems))
}

export const deleteFromCart = (data) => (dispatch, getState) => {
    console.log("data", data)
    dispatch({ type: "DELETE_FROM_CART", payload: data});
    const cartItems = getState().cartReducer.cartItems
    console.log("cartItems", cartItems)
    localStorage.setItem("cartItems", JSON.stringify(cartItems));  
  };


