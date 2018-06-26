var express = require("express");
var Imagen = require("./models/Imagenes");
var router = express.Router();

/* miapp.com/app/ */
router.get("/", function(req,res){
	/* Buscar el usuario */
	res.render("app/home");
});


/* REST */
router.get("/images/new", function(req,res){
	res.render("app/images/new");
});


router.get("/imagenes/:id/edit", function(req,res){});


router.route("/images/:id")
	.get(function(req,res){
		Imagen.findById(req.params.id, function(err,imagen){
			res.render("app/images/show",{imagen:imagen});
		});
	})
	.put(function(req,res){

	})
	.delete(function(req,res){

	});


router.route("/images")
	.get(function(req,res){
	
	})
	.post(function(req,res){
		var data = {
			title: req.body.name
		}
		var imagen = new Imagen(data);

		imagen.save(function(err){
			if(!err){
				res.redirect("/app/images/"+imagen._id);
			}else{
				res.render(err);
			}
		}); 
	});

module.exports = router;


