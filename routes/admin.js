const express=require('express');
const path=require('path');

const router=express.Router();
    router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','admin.html'));
    });
    
    router.use('/add-product',(req,res,next)=>{

    console.log('name of product is '+req.body.title);
    
    res.redirect('/');
    });


    module.exports=router;