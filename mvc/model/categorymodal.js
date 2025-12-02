const mongoose=require('mongoose')
const CategorySchema=mongoose.Schema({
    title:{
        type:String
    },
    category:{
        type:String
    }
})

const Categorymodal=mongoose.model("category",CategorySchema)
module.exports=Categorymodal