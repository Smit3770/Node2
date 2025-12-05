const mongoose=require('mongoose')
const MovieSchema=mongoose.Schema({
    MovieName: {
        type: String
    },
    MovieType: {
        type: String
    }

})
const Moviemodal=mongoose.model("movie",MovieSchema)
module.exports=Moviemodal