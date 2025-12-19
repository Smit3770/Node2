const express=require('express')
const { Register, GetUser, DeleteUser, Edit, Home } = require('../controller/userController')
const isAuth = require('../middleware/Auth')

const U_router=express.Router()
U_router.post('/reg',Register)
U_router.get('/all',GetUser)
U_router.delete('/:id',DeleteUser)
U_router.patch('/:id',Edit)
U_router.get('/',isAuth,Home)

module.exports=U_router