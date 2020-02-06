const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/',(req,res,next) => {
    mongoose.model('User').find({}, (err,items)=>{
        if(err)
        {
            res.status(500);
            return res.json(err);
        }
            
        res.json(items)
    })
})


module.exports = router;