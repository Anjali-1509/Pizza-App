import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector} from "react-redux";
import { addToCart } from '../Actions/cartAction';


const PizzaMenu = ({ data }) => {
    const [varient, setVarient] = useState("small")
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    
    const addToCartHandler = ()=>{
    console.log("button clicked")
    dispatch(addToCart(data, quantity, varient))
    }

    return (
        < >

            <div className='single-menu-div'>

                <div data-aos="fade-right" className='menu-img-div'>

                    <img src={data.image}
                        alt="pizza"
                        className='menu-img'
                    />


                    <div className="overlay2">
                        <p>
                            {data.description}
                        </p>
                    </div>

                </div>

                <div className='content-div'>
                    <h5>{data.name}</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <h6>Varients</h6>
                            <select
                                className="form-select form-select-sm bg-dark text-white" aria-label=".form-select-sm example"
                                value={varient}
                                onChange={(e) => setVarient(e.target.value)}
                            >
                                {data.varients.map((varient) => (
                                    <option key={varient}>{varient}</option>
                                ))}
                            </select>
                        </div>

                        <div className="col-md-6">
                            <h6>Quantity</h6>
                            <select
                                className="form-select form-select-sm bg-dark text-white" aria-label=".form-select-sm example"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            >
                                {[...Array(10).keys()].map((v, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <h4 style={{ marginTop: "20px" }}> Price:₹Price : {data.prices[0][varient] * quantity}</h4>
                    <button 
                    className="button yellow"
                    onClick={addToCartHandler}
                    >ADD TO CART</button>


                </div>

            </div>

        </>
    )
}

export default PizzaMenu
