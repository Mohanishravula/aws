const { text } = require("express");
const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
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
     email_id: {
         type: String,
         required:true
    },
    password:{
        type:String,
        required: true,
        minlength: 6
    }
})


const signupModal = mongoose.model("usersignup",signupSchema);
module.exports = signupModal;