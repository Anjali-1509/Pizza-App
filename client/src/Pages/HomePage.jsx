import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { MdCall ,MdDeliveryDining} from "react-icons/md"
import { AiTwotoneShop, AiFillInstagram } from "react-icons/ai"
import { BiTime } from "react-icons/bi"
import { FaTwitter } from "react-icons/fa"
import { GrFacebook } from "react-icons/gr"
import {GiFruitBowl, GiPizzaSlice} from "react-icons/gi"
import pizzaData from "../pizzaData"
import PizzaMenu from '../Components/PizzaMenu'
import {useDispatch, useSelector} from "react-redux"
import { getAllpizzas } from './../Actions/pizzaAction';


const HomePage = () => {
   const dispatch = useDispatch()
   const pizzaState= useSelector((state)=>state.getAllPizzaReducer)
   const {loading, pizzas, error} = pizzaState

   useEffect(()=>{
      dispatch(getAllpizzas())
      console.log("pizzaaas" ,pizzas)
      console.log(loading, error)
   }, [])

  return (
    <div>

      <div className="slider-container">
        <div className="overlay">
          <h1>Don’t Think Twice,
            <br /> Grab a Slice!</h1>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button className="button">ORDER NOW</button>
            <button className="button yellow">VIEW MENU </button>
          </div>
        </div>
      </div>

      <div className="contact" >

        <div className="address">

          <div data-aos="fade-right">
            <p>
              <MdCall color="rgb(250,197,100)" size="25px" />
              <br /> 000 (123) 456 7890
              <br />our contact number
            </p>
          </div>

          <div data-aos="fade-right">
            <p>
              <AiTwotoneShop color="rgb(250,197,100)" size="25px" />
              <br />180 west 21th street
              <br />our address
            </p>
          </div>

          <div data-aos="fade-right">
            <p>
              <BiTime color="rgb(250,197,100)" size="25px" />
              <br />Open Monday-Friday
              <br />8:00am - 9:00pm
            </p>
          </div>

        </div>

        <div className="social">
          <p data-aos="fade-left"><FaTwitter color="fff" size="25px" /></p>
          <p data-aos="fade-left"><GrFacebook color="fff" size="25px" /></p>
          <p data-aos="fade-left"><AiFillInstagram color="fff" size="25px" /></p>
        </div>

      </div>

      <div style={{ width: "100%", height: "500px", color: "#fff" }}>
        <div className="row h-100" >

          <div className="col col-md-8 h-100" id="res1">
            <img className='h-100 w-100'
              src="https://images.squarespace-cdn.com/content/v1/5357a863e4b02760ee8a5854/1398334729016-9KEJ7XNO4O6DDL4G7NS1/019_025_05.jpg?format=1500w"
              alt="restaurant"
            />
          </div>

          <div id="res" className="col">
            <h1 data-aos="fade-up">WELCOME TO <span style={{ color: "rgb(250,197,100)" }}>PIZZA</span> A RESTAURANT</h1>
            <p data-aos="fade-up">The word pizza was first recorded in the early 1800s, and according to Dictionary.com, there isn’t one agreed upon origin of the word. “Pizza, of course, is borrowed from Italian, but the deeper ingredients of the word are unclear,” they explained. “Some think the Greek pitta (pita, with a root sense of “bran bread”) is the source. Others look to the Langobardic (an ancient German language in northern Italy) bizzo, meaning “bite.”
              In Italian, the meaning of pizza directly translates to “pizza”, but can also be translated to “pie”. </p>
          </div>

        </div>
      </div>

      <div className='service-container'>

      <h1 data-aos="fade-left">OUR SERVICES</h1>
       <p data-aos="fade-right">Far far away, behind the word mountains, far from the countries Vokalia and
       <br/> Consonantia, there live the blind texts.</p>

         <div id='service-row' className='row'>
            <div data-aos="fade-down-right" className='col'>
                <GiFruitBowl size="70px" color="black"/>
                <h5>HEALTHY FOODS</h5>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>

            <div data-aos="fade-down-right" className='col'>
                <MdDeliveryDining size="70px" color="black"/>
                <h5>FASTEST DELIVERY</h5>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>

            <div data-aos="fade-down-right" className='col'>
            <GiPizzaSlice size="70px" color="black" />
            <h5>FASTEST DELIVERY</h5>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
         </div>
      </div>


      <div className="menu-container">
          <h1 data-aos="fade-left">HOT PIZZA MEALS</h1>
          <hr/>
          <p data-aos="fade-right">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            {
              loading ? (<h1>Loading...</h1>)
              : error ? (<h1>Error</h1>)
              :(
                <div className='pizza-data' style={{marginTop:"20px"}}>
            {
              pizzas.map((pizza)=>
               <PizzaMenu data={pizza} />
              )
            }
          </div>
              )
            }
         
      </div>

    </div>
  )
}

export default HomePage
