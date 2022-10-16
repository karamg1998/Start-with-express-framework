const express=require('express');
const path=require('path');
const root=require('../helper function/path.js')

const router=express.Router();
    
router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(root,'views','contact.html'));
    });
    
    router.use('/contactus',(req,res,next)=>{
        console.log('name:'+req.body.name);
        console.log('Email:'+req.body.email);
        res.redirect('/success');
    });
    module.exports=router;