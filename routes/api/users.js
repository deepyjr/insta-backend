const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// api/users => aaffciher tout les users
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

// api/users => creer
router.post('/',(req,res,next) => {
    mongoose.model('User').create(req.body, (err,items)=>{
        if(err)
        {
            res.status(500);
            return res.json(err);
        }
            
        res.json(items)
    })
})
// api/users/43925432 => maj
router.post('/:id',(req,res,next) => {
    mongoose.model('User').findByIdAndUpdate(req.params.id, req.body, (err,items)=>{
        if(err)
        {
            res.status(500);
            return res.json(err);
        }
            
        res.json(items)
    })
})
// api/users/43925432 => del
router.delete('/:id',(req,res,next) => {
    mongoose.model('User').findByIdAndRemove(req.params.id, (err,items)=>{
        if(err)
        {
            res.status(500);
            return res.json(err);
        }
            
        res.json(items)
    })
})

module.exports = router;