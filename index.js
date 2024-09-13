const express = require("express");
const app = express();

app.get("/mul",function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a*b
    })

})

app.get("/div",function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a/b
    })
})

app.get("/add", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a+b
    })
})

app.get("/sub", function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a-b
    })
})

app.listen(3000);