// ? Basic structure of data
const mongoose=require("mongoose")
const seatSchema = mongoose.Schema({
    isAvailable: {
        type: Boolean,
        required: true
    }
}, {
    versionKey: false
})

// ! Model for the data
const seatModel = mongoose.model("seat", seatSchema);

module.exports = {
    seatModel
}