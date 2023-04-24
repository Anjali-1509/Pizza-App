const mogoose = require("mongoose")
const PizzaModel = require("../Models/pizzaModel")

const pizzas = [
  {
    name: "Margherita",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 99,
        medium: 199,
        large: 399,
      },
    ],
    category: "veg",
    image: "https://www.foodandwine.com/thmb/7BpSJWDh1s-2M2ooRPHoy07apq4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mozzarella-pizza-margherita-FT-RECIPE0621-11fa41ceb1a5465d9036a23da87dd3d4.jpg",
    description: "Classic delight with 100% real mozzarella cheese",
  },
  {
    name: "Farmhouse",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 229,
        medium: 399,
        large: 599,
      },
    ],
    category: "veg",
    image: "https://b.zmtcdn.com/data/pictures/chains/3/143/a0c3bcc09b1448a7138beda386f8db21.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    description:
      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
  },
  {
    name: "Veggie Paradise",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 180,
        medium: 290,
        large: 460,
      },
    ],
    category: "veg",
    description:
      "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
    image: "https://pizzayum.in/wp-content/uploads/2022/02/16.jpg",
  },
  {
    name: "Chicken Golden Delight",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 249,
        medium: 349,
        large: 599,
      },
    ],
    category: "nonveg",
    image: "https://pbs.twimg.com/media/B81TPA9CAAEA-lo.jpg",
    description:
      "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
  },
  {
    name: "Chicken Pepperoni",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 320,
        medium: 580,
        large: 800,
      },
    ],
    category: "nonveg",
    image: "https://pbs.twimg.com/media/E2jmUAsVEAYMdd5.jpg",
    description:
      "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
  },
  {
    name: "Indi Chicken Tikka",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 250,
        medium: 380,
        large: 500,
      },
    ],
    category: "nonveg",
    image: "https://www.savoryandsweetfood.com/wp-content/uploads/2015/02/F5707C9A-A1B6-452C-90CE-07A9BA00440D.png",
    description:
      "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
  },
]

exports.pizzaController= async(req, res)=>{
try{
 let data = req.body
 console.log(data)
 let pizza = await PizzaModel.insertMany(pizzas)
 return res.status(201).send({success:true, pizza:pizza})
}
 catch(err){
  return res.status(500).send({success:false, message:"something went wrong in creating pizza", error:err.message})
 }
}

exports.getPizza=async(req,res)=>{
try{
let pizza = await PizzaModel.find()
return res.status(200).send(pizza)
}
catch(err){
    return res.status(500).send({success:false, message:"something went wrong in creating pizza", error:err.message})
}
}