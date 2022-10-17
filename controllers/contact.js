const path=require('path');
const root=require('../helper function/path.js')

exports.contactGet=(req,res,next)=>{
    res.sendFile(path.join(root,'views','contact.html'));
    };

    exports.contactUse=(req,res,next)=>{
        console.log('name:'+req.body.name);
        console.log('Email:'+req.body.email);
        res.redirect('/success');
    };