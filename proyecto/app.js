'use strict';

var express = require("express");//carga de express
var bodyParser = require("body-parser");//body parser require para poder leer parametros
//console.log(bodyParser);
var app = express();

//utilizamos la clase
app.use("/public",express.static('public'));//midleware para archivos estaticos
app.use(bodyParser.json());//para leer json's
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "jade");//-->para poder utilizar jade



app.get("/", function(req,res){
	console.log("entro1");
	res.render("index");
});

app.get("/login", function(req,res){
	console.log("entro2");
	res.render("login");
});

app.post("/users",function(req,res){
	console.log("entro2");
	console.log("contra "+req.body.password);
	console.log("email "+req.body.email);
	

	res.send("se realizo compa");
});

app.listen(8080);