const http = require('http');
const express=require('express');

const app=express();

app.use((req,res,next)=>{
let name={ key1: 'value'}
 res.send(name);
});



const server=http.createServer(app);

server.listen(3000);