import React from 'react'
import StripeCheckout from "react-stripe-checkout"
import { useDispatch } from 'react-redux';
import { placeOrder } from '../Actions/orderAction';



const Checkout = ({ subtotal }) => {
  const dispatch = useDispatch()
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subtotal))
    console.log(token)
  }

  return (
    <div>
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey='pk_test_51N1vxOSEEbVbAa10WfAxYcZqebEr67HPk5i6rAJ6jdJ8NGD6TaaYanJV8Yx3vBrbDPkpPZhETyH2pSPM3eOus0Tp00Ho8mwGOh'
        currency='INR'
      >
        <button className='btn btn-warning'>PAY NOW</button>
      </StripeCheckout>
    </div>
  )
}

export default Checkout
