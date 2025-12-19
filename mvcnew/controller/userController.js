const usermodal = require("../model/usermodal")
const nodemailer=require('nodemailer')
const Register=async (req,res)=>{
    try{
        const data=await usermodal.create(req.body)
        res.send(data)
    }catch(err){
        res.send(err.message)
    }
}

const GetUser=async (req,res)=>{
    const data=await usermodal.find()
    res.send(data)
}

const DeleteUser = async (req,res)=>{
    const data=await usermodal.findByIdAndDelete(req.params.id)
    res.send("deleted")
}

const Edit = async (req,res)=>{
    const id=req.params.id
    const data=await usermodal.findByIdAndDelete(id,req.body,{new:true})
    res.send(data)
}

const Login=async (req,res)=>{
    const {username,password}=req.body
    const data=await usermodal.findOne({username})
    if(!data){
        return res.send("user not found")
    }
    if(data.password !== password)
    {
        return res.send("wrong password")
    }
    res.cookie("data",data.id).send("login successfull")
};

const Home=(req,res)=>{
    res.render("Home")
}

const otp=Math.floor(Math.random()*10000)
const mail=(req,res)=>{
    const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"smitpanchal3770@gmail.com",
            pass:"vzlvutviopbbjojz"
        }
    })
}


module.exports={Register,GetUser,DeleteUser,Edit,Login,Home}