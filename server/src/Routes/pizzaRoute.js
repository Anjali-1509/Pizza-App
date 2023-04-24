const express = require("express")
const { pizzaController, getPizza } = require("../Controllers/PizzaController")
const router = express.Router()


router.get("/", (req, res) => {
    res.send("hi i am API")
})

router.post("/create-pizza",pizzaController)
router.get("/get-pizza", getPizza)

module.exports = router