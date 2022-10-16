const express=require('express');
const path=require('path');
const router=express.Router();
const root=require('../helper function/path.js')

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(root,'views','shop.html'));
    });

    router.get('/success',(req,res,next)=>{
        res.sendFile(path.join(root,'views','success.html'));
        });

    module.exports=router;