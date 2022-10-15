const express=require('express');

const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended: false}));
const adminRoutes=require('./routes/login.js');
const shopRoutes=require('./routes/message.js');

app.use(adminRoutes);

app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>');
})
	
app.listen(2000);