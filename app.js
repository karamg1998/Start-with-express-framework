const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended: false}));
const adminRoutes=require('./routes/admin.js');
const shopRoutes=require('./routes/shop.js');
const path=require('path');
app.use(adminRoutes);

app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})
app.listen(3000);