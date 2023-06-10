// *mongodb://127.0.0.1:27017/
require('dotenv').config()
const mongoose = require("mongoose")
const connection = mongoose.connect(process.env.mongoURL)

module.exports = {
    connection,
}