const path=require('path');
const root=require('../helper function/path.js')

exports.adminGet=(req,res,next)=>{
    res.sendFile(path.join(root,'views','admin.html'));
    };

    exports.adminPost=(req,res,next)=>{
        console.log('name of product is '+req.body.title);
    
        res.redirect('/');
        };

       exports.shopGet=(req,res,next)=>{
        res.sendFile(path.join(root,'views','shop.html'));
        };

        exports.shopSuccess=(req,res,next)=>{
            res.sendFile(path.join(root,'views','success.html'));
            }