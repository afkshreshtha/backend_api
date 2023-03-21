import express from "express"

import userRouter from "./routes/userRoute.js"

import {config} from "dotenv"

 export const app = express();

 config({
    path:"./db/config.env"
 })


//?Using middleware
app.use(express.json());
app.use( "/users",userRouter)


app.get("/", (req, res) => {
    res.send("200")
})

