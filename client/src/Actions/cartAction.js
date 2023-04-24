export const addToCart = (data, quantity, varient)=>(dispatch, getState)=>{
var cartItem = {
    name : data.name,
    id:data._id,
    image:data.image,
    varient:varient,
    quantity:quantity,
    prices:data.prices,
    price : data.prices[0][varient]*quantity

}
dispatch({type:"ADD_TO_CART", payload:cartItem})
localStorage.setItem("cartItems", JSON.stringify(getState().cartReducer.cartItems))
}