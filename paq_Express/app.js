'use strict';

var express = require("express");
var app = express();

app.set("view engine", "jade");

app.get("/", function(req,res){
	//res.send("the name");
	res.render("index", {hola: "lo mando desde el render"});
});


app.listen(8080);


