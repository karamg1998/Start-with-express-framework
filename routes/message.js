
const express=require('express');

const router=express.Router();

const fs=require('fs');

router.get('/',(req,res,next)=>{
    fs.readFile('./file.txt',(err,data)=>{
      if(err)
      {
        console.log(err);
      }
      let Data=data.toString();
      console.log(Data);

      res.send(`<body>${Data}</body>
              <form action="/product" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"
              method="POST"> 
              <input type="hidden" id="username" name="username">
              <input  type="text" id="message" name="message">
              <button type="submit">message</button>
              </form>`);

    });
});


    router.post('/product',(req,res,next)=>{
       let message=`${req.body.username}:${req.body.message} `;
       fs.appendFile("file.txt", message,function(err){
        if(err) {
            console.log(err);
        }
    });
        res.redirect('/');
});
module.exports=router;