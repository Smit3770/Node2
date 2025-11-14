const { name } = require("ejs")
const express=require("express")
const app=express()
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))

let student=[
    {
        id:1,
        name:"smit"        
    },
    {
        id:2,
        name:"sm"        
    }
]

app.get("/",(req,res)=>{
    res.render("home",{student})
})

app.post("/insertData",(req,res)=>{
    const {id,name}=req.body
    const obj={
        id:Number(id),
        name
    }
    student.push(obj)
    res.redirect("/")
})

app.get("/delete",(req,res)=>{
    const id=Number(req.query.id)
    student=student.filter((el)=>el.id!==id)
    res.redirect("/")
})

app.get("/edit",(req,res)=>{
    const id=Number(req.query.id)
    const editdata=student.find((el)=>el.id===id)
    res.render("edit",{editdata})
})

app.listen(7800,()=>{
    console.log("server listen")
})