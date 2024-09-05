const express = require("express");
const app = express();
const cors = require("cors");
const { connectToDB } = require("./utilityFundtions/connectToDB");
require("dotenv").config();
const port = process.env.PORT;

// middleware
app.use(cors())

// connect to database
connectToDB()

app.get("/", async (req, res) => {
    try {
        res.json({ success: true, message: "server is running" })
    } catch (error) {
        res.json({ success: false, error })
    }
})

app.listen(port, () => {
    console.log(`server is listening to the port ${port}`)
})