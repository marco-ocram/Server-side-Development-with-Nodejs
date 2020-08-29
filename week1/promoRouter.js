const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end(`will send the promotiones`);
     
})
.post((req,res,next)=>{
    res.end(`Will add promotion`+req.body.name+
    `with details`+req.body.description); 
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end(`PUT NOT SUPPORTED in /promotiones `); 
})
.delete((req,res,next)=>{
    res.end('Deleting all promotiones');
});

promoRouter.route('/:promoId')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end(`will send the details of the promotion `+req.params.promoId+' to you');
     
})
.post((req,res,next)=>{
    res.write('Updating the promotion '+req.params.promoId );
    res.end(`Will update promotion `+req.body.name+
    `with details :`+req.body.description); 
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end(`PUT NOT SUPPORTED in /promotiones `); 
})
.delete((req,res,next)=>{
    res.end('Deleting promotion :'+req.params.promoId);
});

module.exports = promoRouter;