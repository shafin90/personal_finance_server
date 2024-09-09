const mongoose = require("mongoose");
const costSchema = new mongoose.Schema({
    amount: {
        type: Number
    },
    source: {
        type: String
    },
    date: {
        type: String
    },
    name: {
        type: String
    },
    personalTarget: {
        type: Number
    }
})

const Cost = mongoose.model("Cost", costSchema)

module.exports = { Cost }