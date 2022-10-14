
const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended: false}));


app.use('/add-product',(req,res,next)=>{
res.send('<form action="/product" method="POST"><input type="text" name="title"><br><input type="text" name="size"><br><button type="submit">add</button></form>');
});

app.use('/product',(req,res,next)=>{
console.log('name of product is '+req.body.title);
console.log('size of product is '+req.body.size);
res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send('<h1>hello express.js</h1>');
    });

app.listen(3000);