const express=require('express');

const admin=require('../controllers/contact.js')
const router=express.Router();

router.get('/contactus',admin.contactGet);

    router.use('/contactus',admin.contactUse);
    module.exports=router;