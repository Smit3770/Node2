const userData = require("../Model/userM")


const Register=async(req,res)=>{
    const data=await userData.create(req.body)
    res.redirect("/user/login")
}

const RegisterGet=async(req,res)=>{
    const data=await userData.find({})
    res.render("register",{data})
}

const login=async(req,res)=>{
    const {username,password}=req.body
    const data=await userData.findOne({username:username})
    if(!data){
        return res.send("username not found")
    }

    if(data.password != password){
        return res.send("password not valid")
    }

    return res.cookie("data",data.id).redirect("/blog")
}
module.exports={Register,RegisterGet,login}