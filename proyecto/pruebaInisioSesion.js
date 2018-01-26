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

//js modelo
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