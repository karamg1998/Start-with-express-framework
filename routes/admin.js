const express=require('express');


const admin=require('../controllers/products.js')
const router=express.Router();

router.get('/add-product',admin.adminGet);

    router.use('/add-product',admin.adminPost);
    
    module.exports=router;