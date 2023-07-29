const express= require('express');
const fileUpload = require("express-fileupload");
const app=express();
app.use(express.json());
app.use(express.static(__dirname+'/mycloud'));
app.use(express.static(__dirname+'/download'));
app.use(fileUpload());
app.use(express.urlencoded({extended:true}));
module.exports=app;