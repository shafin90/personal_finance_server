const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    id: String,
    password: String,
    personalTarget: Number,
    personalCost: [{
        amount: Number,
        source: String,
        date: String,
        id: String
    }]

})

const User = mongoose.model("User", userSchema)

module.exports = { User }