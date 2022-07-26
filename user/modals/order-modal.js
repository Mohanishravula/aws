const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    phone_number:{
        type: Number,
        required: true,
        minLength: 10,
        maxLength:10
    },
     order_id: {
         type: String,
         required:true
    },
    order_type:{
        type:String,
        required: true
    },
    item_id:{
        type: String,
        required : true

    },
    order_status:{
        type: String,
        required : true
    }
})


const orderModal = mongoose.model("order",orderSchema);
module.exports = orderModal;