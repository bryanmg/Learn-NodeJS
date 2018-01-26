'use strict'

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fotos");//cadena de conexion

var email_match = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, "email no valido"];
var password_validation = {validator: function(p){return this.password_confirmation == p;},message: "Las contraseñas no coinciden"}

var user_schema = new mongoose.Schema({//atributos de user
	name: String,
	username: {type: String, required: "Falta nombre de usuario"},
	email: {type: String, required: "el correo obligatorio", match: email_match},
	date_birth: Date,
	password: {
		type: String,
		minlength: [8,"El password es muy corto"],
		validate: password_validation
	}
});

user_schema.virtual("password_confirmation").get(function(){//atributos virtuales de user
	return this.p_confirmation;
}).set(function(password){
	this.p_confirmation = password;
});

var User = mongoose.model("User", user_schema);//define el nombre de la coleccion pero en plural --"Users"

module.exports.User = User;


/*/**--> tipos de validaciones:::::
//arreglo para validaciones enum --> ValoresValidos = ["M","F"]
//arreglo para validaciones match --> email_match = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, "email no valido"]

email: {Type: String, required: "el correo obligatorio", match: email_match},
edad: {type: Number, min:[5,"mensaje defaul"], max[89, "mensaje defaul"]}
sex: {Type:String, enum:{values: ValoresValidos, message:"Opción no válida"} }
*/

/********* codigo ejemplo //ejercicios anteriores ==========*******

/*************** CADENA DE CONEXION PARA MONGOdb ******************
mongoose.connect("mongodb://localhost/fotos");

var userSchemaJson = {//Esto es una tabla de mi BD
	email: String,
	password: String
};


var user_schema = new mongoose.Schema(userSchemaJson);//inisializo la tabla
var User = mongoose.model("User", user_schema);//es equivalente a una tabla*/


