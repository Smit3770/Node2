const mongoose=require('mongoose')
const BookSchema=mongoose.Schema({
    BookName: {
        type: String
    },
    BookAuthor: {
        type: String
    }

})
const Bookmodal=mongoose.model("book",BookSchema)
module.exports=Bookmodal