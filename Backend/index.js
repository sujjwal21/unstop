const express = require("express")
const app = express();
require('dotenv').config()

const {
    connection,
    UserModel
} = require("./db");
app.use(express.json())

app.get("/", (req, res) => {
    console.log("Home Page")
    res.send("Welcome")
})



app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("connected to database")
    } catch (err) {
        console.log("can not connect to database")
    }
    console.log(`Server is runnimg on port ${process.env.port}`)
})