const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end(`will send the leaders`);
     
})
.post((req,res,next)=>{
    res.end(`Will add leader`+req.body.name+
    `with details`+req.body.description); 
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end(`PUT NOT SUPPORTED in /leaders `); 
})
.delete((req,res,next)=>{
    res.end('Deleting all leaders');
});

leaderRouter.route('/:leaderId')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end(`will send the details of the leader `+req.params.leaderId+' to you');
     
})
.post((req,res,next)=>{
    res.write('Updating the leader '+req.params.leaderId );
    res.end(`Will update leader `+req.body.name+
    `with details :`+req.body.description); 
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end(`PUT NOT SUPPORTED in /leaders `); 
})
.delete((req,res,next)=>{
    res.end('Deleting leader :'+req.params.leaderId);
});

module.exports = leaderRouter;