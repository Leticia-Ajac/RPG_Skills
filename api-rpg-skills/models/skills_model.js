const mongoose = require("mongoose")

const Schema = mongoose.Schema


const Skill = new Schema(
    {
        id: {type: Number, required: true},
        name: {type: String, required: true},
        type: {type: String, required: true},
        points: {type: Number, required: true},
    },
    {timestamps: true}
)

module.exports = mongoose.model('skill', Skill)