const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// api/post => aaffciher tout les posts
router.get('/',(req,res,next) => {
    mongoose.model('Post').find({}, (err,items)=>{
        if(err)
        {
            res.status(500);
            return res.json(err);
        }
            
        res.json(items)
    })
})

// api/post => creer
router.post('/',(req,res,next) => {
    mongoose.model('Post').create(req.body, (err,items)=>{
        if(err)
        {
            res.status(500);
            return res.json(err);
        }
            
        res.json(items)
    })
})
// api/post/43925432 => maj
router.post('/:id',(req,res,next) => {
    mongoose.model('Post').findByIdAndUpdate(req.params.id, req.body, (err,items)=>{
        if(err)
        {
            res.status(500);
            return res.json(err);
        }
            
        res.json(items)
    })
})
// api/post/43925432 => del
router.delete('/:id',(req,res,next) => {
    mongoose.model('Post').findByIdAndRemove(req.params.id, (err,items)=>{
        if(err)
        {
            res.status(500);
            return res.json(err);
        }
            
        res.json(items)
    })
})

module.exports = router;