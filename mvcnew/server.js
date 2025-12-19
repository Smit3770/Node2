const express=require('express')
const db=require('./config/db')
const cookieParser=require('cookie-parser')
const U_router = require('./routes/userRouter')
const app=express()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

app.get('/reg',(req,res)=>{
    res.render('login')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.use('/user',U_router)

app.use(7800,()=>{
    console.log("server listen")
})