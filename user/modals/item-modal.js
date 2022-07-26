const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    item_name:String,
    item_id: String,
    item_catogery:String,
    item_image: String,
    actual_price: Number,
    discounted_price: Number
})


const itemModal = mongoose.model("item",itemSchema);
module.exports = itemModal;