import { useSelector } from "react-redux"

export default function CartPage() {
    const cartState = useSelector((state) => state.cartReducer)
    const cartItems = cartState.cartItems
    console.log(cartItems)

    return (
        <div>
            <div className="container mt-5">

                <div className="row">
                    <div className="col-md-6">
                        <h1>my cart</h1>
                        <div style={{border:"1px solid green", height:"200px"}} className="row">
                            {
                                cartItems.map((item) =>
                                <>
                                    <div style={{border:"1px solid blue"}} className="col-md-7 h-100 d-flex flex-column justify-content-center align-self-center">
                                        <h5>{item.name} [{item.varient}]</h5>
                                        <h6>
                                            Price : {item.quantity}×{item.prices[0][item.varient]} = ₹{item.price}
                                        </h6>
                                    </div>
                                    <div style={{border:"1px solid red"}} className="col-md-5 h-100">
                                    <img className="h-100 w-100" src={item.image}  alt="pizza"/>
                                    </div>
                                    </>
                                )
                            }
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h1>Payment</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}