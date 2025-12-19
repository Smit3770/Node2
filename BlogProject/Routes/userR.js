
const express=require("express")
const { Register, RegisterGet, login } = require("../Controller/userC")
const U_router=express.Router()

U_router.post("/register",Register)
U_router.get("/",RegisterGet)
U_router.get("/register",RegisterGet)
U_router.post("/login",login)
U_router.get("/login",(req,res)=>{
    res.render("login")
})

module.exports=U_router