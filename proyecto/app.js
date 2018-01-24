'use strict';

/************** IMPORTO LAS LIBRERIAS NECESARIAS ******************/
var express = require("express");//carga de express
var bodyParser = require("body-parser");//body parser require para poder leer parametros
var User = require("./models/user").User;
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
	User.find(function(err,doc){
		console.log(doc);
		res.render("login");
	});
});

app.post("/users",function(req,res){
	//console.log("contra "+req.body.password);console.log("email "+req.body.email);
	var user = new User({email: req.body.email, 
						password: req.body.password,
						password_confirmation: req.body.password_confirmation
					});
	console.log(user.password_confirmation);

	if(user.password_confirmation == null){
		res.send("no se pudo compa-kun");
	}else{
		user.save(function(){
			//aqui se validan errores.. y se envia la respouesta al usuario
			res.send("se realizo compa");
		});
	}

});

app.listen(8080);



