const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended: false}));
const adminRoutes=require('./routes/admin.js');
const shopRoutes=require('./routes/shop.js');
const contactRoutes=require('./routes/contact.js');
const path=require('path');

app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes);
app.use(contactRoutes);
app.use(shopRoutes);


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})
app.listen(3000);