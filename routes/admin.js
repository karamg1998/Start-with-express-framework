const express=require('express');

const router=express.Router();



    router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><br><input type="text" name="size"><br><button type="submit">add</button></form>');
    });
    

    router.use('/add-product',(req,res,next)=>{
    
    console.log('name of product is '+req.body.title);
    console.log('size of product is '+req.body.size);
    res.redirect('/');
    });
    

    module.exports=router;