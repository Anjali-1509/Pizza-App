export const placeOrderReducer=(state={},action)=>{
  switch(action.type){
    case "PLACE_ORDER_REQUEST":
    return {
        ...state,
        loading:true
    }

    case "PLACE_ORDER_SUCCESS" :
        return{
            success:true,
            loading:false
        }
        case "PLACE_ORDER_FAIL" : 
        return {
            loading : false,
            error: action.payload
        }
        default : return state
  }
}