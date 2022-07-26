const { Router } = require("express");
const express = require("express");
const cartModal = require("../modals/cart-modal");

const router = express.Router();


router.post("/add",((req,res)=>{
    cartModal.create({username:req.body.username,item_id:req.body.item_id}).then(()=>{
        res.status(200).send("item added to cart sucssfully")
    }).catch(()=>{
        res.status(400).send(err)
    })
}))

router.delete("/remove/:id",((req,res)=>{
    cartModal.deleteOne({item_id:req.params.id}).then(()=>{
        res.status(200).send("item removeded from cart sucssfully")
    }).catch(()=>{
        res.status(400).send(err)
    })
}))



module.exports=router;