// const express = require('express');
import express from 'express';
const app = express();

app.get("/", function(req, res){
    // console.log(req);
    res.send("hello");
});

// contact route
app.get("/contact", (req, res) => {
    res.send("contact : visharadborsutkar777@gmail.com");
});

app.get("/about", function(req, res){
    var num1 = res.num1;
    var num2 = res.num2;
    var ansNum = Number(num1) + Number(num2);
    res.send("Anwer is " + ansNum);
    res.send("Visharad About page");
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});
