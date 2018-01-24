'use strict'

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fotos");//cadena de conexion

var user_schema = new mongoose.Schema({
	name: String,
	username: String,
	email: String,
	date_birth: Date
});

user_schema.virtual("password_confirmation").get(function(password){
	if(this.p_confirmation = password)
		return this.p_confirmation;
	else{
		console.log("nelson");
		return null;
	}
}).set(function(password){
	this.p_confirmation = password;
});

var User = mongoose.model("User", user_schema);//define el nombre de la coleccion pero en plural --"Users"

module.exports.User = User;


/********* codigo ejemplo //ejercicios anteriores ==========*******

/*************** CADENA DE CONEXION PARA MONGOdb ******************
mongoose.connect("mongodb://localhost/fotos");

var userSchemaJson = {//Esto es una tabla de mi BD
	email: String,
	password: String
};


var user_schema = new mongoose.Schema(userSchemaJson);//inisializo la tabla
var User = mongoose.model("User", user_schema);//es equivalente a una tabla*/