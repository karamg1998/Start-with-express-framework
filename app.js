const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const path=require('path');
const root=require('./helper function/path.js')
const adminRoutes=require('./routes/admin.js');
const shopRoutes=require('./routes/shop.js');
const contactRoutes=require('./routes/contact.js');

app.use(bodyParser.urlencoded({extended: false}));

const admin=require('./controllers/error.js')

app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes);
app.use(contactRoutes);
app.use(shopRoutes);


app.use(admin.error);
app.listen(3000);