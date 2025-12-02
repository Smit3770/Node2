const Bookmodal = require("../model/bookmodal")

const addBook = async (req, res) => {
    const data = await Bookmodal.create(req.body)
    res.send(data)
}

const allBook = async (req, res) => {
    const data = await Bookmodal.find()
    res.send(data)
}

const DeleteBook = async (req, res) => {
    const data = await Bookmodal.findByIdAndDelete(req.params.id)
    res.send("success", data)
}

const EditBook= async (req, res) => {
    const id = req.params.id
    const data = await Bookmodal.findByIdAndUpdate(id, req.body)
    res.send("success", data)
}

module.exports = { addBook, allBook, DeleteBook, EditBook }