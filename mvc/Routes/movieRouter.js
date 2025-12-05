const express=require('express')
const { addMovie, allMovie, EditMovie, DeleteMovie } = require('../Controller/movieController')

const Movie_Router=express.Router()
Movie_Router.post("/add",addMovie)
Movie_Router.get("/all",allMovie)
Movie_Router.patch("/:id",EditMovie)
Movie_Router.delete("/:id",DeleteMovie)

module.exports=Movie_Router