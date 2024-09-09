const mongoose = require("mongoose");
const costSchema = new mongoose.Schema({
    amout: {
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
    }
})

const COST = mongoose.model("COST", costSchema)

module.exports = { COST }