const http = require('http');
const express=require('express');

const app=express();

app.use((req,res,next)=>{
console.log('this is first middleware');
next();
});

app.use((req,res,next)=>{
    console.log('this is second middleware');
    });

app.listen(3000);