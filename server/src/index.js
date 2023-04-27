const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("mongoose")
const pizzaRoute =require("./Routes/pizzaRoute.js")
const userRoute = require("./Routes/userRoutes")



dotenv.config()

//DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("CONNECTED TO MONGODB:)"))
    .catch((err) => console.log(err))

//MIDDLEWARES
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))


app.use("/pizza", pizzaRoute)
app.use("/user", userRoute)

let PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}:)`)
})