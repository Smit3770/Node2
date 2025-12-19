const express=require("express")
const app=express()
const db=require("./config/db")

const cookieParser=require("cookie-parser")
const U_router = require("./Routes/userR")
const B_router = require("./Routes/blogR")

app.use(cookieParser())
app.set("view engine","ejs")
app.use(express.urlencoded())

app.use("/user",U_router)
app.use("/blog",B_router)

app.listen(3006,()=>{
    console.log("server listen")
})