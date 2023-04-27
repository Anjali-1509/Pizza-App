export const registerUserReducer=(state={}, action)=>{
switch(action.type){
case "USER-REGISTER_REQUEST" :
    return{
        loading : true
    }

case "USER_REGISTER_SUCCESS" : 
return {
  loading: false,
  success:true
}
case "USER_REGISTER_FAIL" : 
return{
    loading : false,
    err: action.payload
}
default : return {state}
}
}