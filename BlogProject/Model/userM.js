const mongoose=require("mongoose")

const userModel=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})

const userData=mongoose.model("userData123",userModel)
module.exports=userData