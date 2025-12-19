
const express=require("express")
const { BlogGet, BlogPost, BlogDelete, BlogEdit, BlogUpdate } = require("../Controller/blogC")
const isAuth = require("../Middleware/userAuth")
const B_router=express.Router()

B_router.get("/",isAuth,BlogGet)
B_router.post("/blogData",isAuth,BlogPost)
B_router.get("/delete",isAuth,BlogDelete)
B_router.get("/edit",isAuth,BlogEdit)
B_router.post("/editData",isAuth,BlogUpdate)

module.exports=B_router