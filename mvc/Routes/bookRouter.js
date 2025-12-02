const express=require('express')
const { addBook, allBook, EditBook, DeleteBook } = require('../Controller/bookController')

const Book_Router=express.Router()
Book_Router.post("/add",addBook)
Book_Router.get("/all",allBook)
Book_Router.patch("/:id",EditBook)
Book_Router.delete("/:id",DeleteBook)

module.exports=Book_Router