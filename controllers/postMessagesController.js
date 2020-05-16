const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId

const { PostMessage }  = require('../models/postMessage');

router.get('/', (req,res)=>{
    PostMessage.find((err,docs)=>{
        if (!err) {
            res.json(docs)
        } 
        else console.log('Erro while retrieving all records' + JSON.stringify(err,undefined,2))
    })
})

router.post('/', (req,res)=>{
    const newRecord= new PostMessage({
        title: req.body.title,
        message: req.body.message
    })

    newRecord.save((err,docs)=>{
        if (!err) {
            res.send(docs)
        } 
        else console.log('Erro while creating new records' + JSON.stringify(err,undefined,2))
    })
})

router.put('/:id',(req,res)=>{
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('No record with given ID: '+req.params.id )
    }
    const updateRecord= {
        title: req.body.title,
        message: req.body.message
    }

    PostMessage.findByIdAndUpdate(req.params.id,{$set:updateRecord}, {new:true} ,(err,docs)=>{
        if (!err) {
            res.send(docs)
        } 
        else console.log('Erro while updaing a record' + JSON.stringify(err,undefined,2))
    })
})

router.delete('/:id',(req,res)=>{
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('No record with given ID: '+req.params.id )
    }
    
    PostMessage.findByIdAndRemove(req.params.id,(err,docs)=>{
        if (!err) {
            res.send(docs)
        } 
        else console.log('Erro while deleting a record' + JSON.stringify(err,undefined,2))
    })
})
module.exports = router;