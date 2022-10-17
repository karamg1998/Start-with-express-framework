const path=require('path');
const root=require('../helper function/path.js')

exports.error=(req,res,next)=>{
    res.status(404).sendFile(path.join(root,'views','404.html'));
};
