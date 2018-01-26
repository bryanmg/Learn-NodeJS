'use strict';

/************** IMPORTO LAS LIBRERIAS NECESARIAS ******************/
var express = require("express");//carga de express
var bodyParser = require("body-parser");//body parser require para poder leer parametros
var User_Model = require("./models/user").User;
var app = express();


/*************** USO LAS CLASES IMPORTADAS *****************************/
app.use("/public",express.static('public'));//midleware para archivos estaticos
app.use(bodyParser.json());//para leer json's
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "jade");//-->para poder utilizar jade


/**+************** ESTABLEZCO LAS ACCIONES QUE VA A REALIZAR EN MIS DIFERENTES VISTAS **************/
app.get("/", function(req,res){
	res.render("index");
});

app.get("/login", function(req,res){
	User_Model.find(function(err,doc){
		//console.log(doc);
		res.render("login");
	});
});

app.get("/sessions", function(req,res){
	User_Model.find(function(err,doc){
		//console.log(doc);
		res.render("sessions");
	});
});

app.post("/users",function(req,res){
	var user = new User_Model({
								email: req.body.email, 
								password: req.body.password,
								password_confirmation: req.body.p_confirmation,
								username: req.body.username
							});
	
	/*/EJECUCION ASINCRONA
	user.save(function(err){
		//aqui se validan errores.. y se envia la respouesta al usuario
		if(err){
			console.log(String(err));
		}
		res.send("se realizo compa");
	});*/
	//PROMISES -- EJECUCION SINCRONA
	user.save().then(function(us){
		res.send("Se guardo el usuario");
	}, function(err){
		console.log(String(err));
		res.send("Se presento un error compa-kun");
	});

});

app.post("/dashboard", function(req,res){
	var parms = {email: req.body.email, password: req.body.password};
	
	User_Model.findOne(parms, function(err, docs){
		console.log(docs);
		if(docs.email == parms.email && docs.password == parms.password){
			res.send("si coincidieron");
		}else{
			res.send("no quedaron compa");
		}
	});
});

app.listen(8080);

/*
console.log("docs.username: "+docs.username);
console.log("parms.email: "+parms.email);
console.log("docs.password: "+docs.password);
console.log("parms.password: "+parms.password);
*/



