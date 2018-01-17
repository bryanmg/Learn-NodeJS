'use strict';

var express = require("express");
var app = express();

app.set("view engine", "jade");

app.get("/", function(req,res){
	res.render("index");//enviar por metodo get
});


app.get("/:nombre", function(req,res){//para pasar variables en la url
	res.render("form", {nombre: req.params.nombre});//enviar por metodo get
});


app.post("/", function(req,res){
	res.render("form");// enviar por metodo post
});



app.listen(8080);