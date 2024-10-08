const mongoose = require("mongoose");

const familySchema = new mongoose.Schema({
    familyMembers: [
        {
            name: String,
            email: String,
            id: String,
            password: String
        }
    ],
    familyname: String,
    familyId: String,
    familyTarget: Number
})

const Family = mongoose.model("Family", familySchema)

module.exports = { Family }