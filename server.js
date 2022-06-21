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
    res.send("Visharad About page");
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});
