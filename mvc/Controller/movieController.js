const Moviemodal = require("../model/moviemodal")

const addMovie = async (req, res) => {
    const data = await Moviemodal.create(req.body)
    res.send(data)
}

const allMovie = async (req, res) => {
    const data = await Moviemodal.find()
    res.send(data)
}

const DeleteMovie = async (req, res) => {
    const data = await Moviemodal.findByIdAndDelete(req.params.id)
    res.send("success", data)
}

const EditMovie= async (req, res) => {
    const id = req.params.id
    const data = await Moviemodal.findByIdAndUpdate(id, req.body)
    res.send("success", data)
}

module.exports = { addMovie, allMovie, DeleteMovie, EditMovie }