const express=require('express');

const router=express.Router();
const admin=require('../controllers/products.js')

router.get('/',admin.shopGet);

    router.get('/success',admin.shopSuccess);

    module.exports=router;