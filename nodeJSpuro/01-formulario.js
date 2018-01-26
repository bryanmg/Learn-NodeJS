'use strict';

var http = require("http"),
	fs = require("fs"),
	parser = require("./02-Parametros.js"),
	render = require("./03-Render_view.js");

var p = parser.parse;
var sust_html = render.render;

http.createServer(function(req,res){
	
	if(req.url.indexOf("favicon.ico")>0){return;}

	fs.readFile("./index.html", function(err,html){
		
		var parametros = p(req);
		var html_SF = sust_html(html,parametros);
		
		res.writeHead(200,{"Content-Type":"text/html"});
		res.write(html_SF);
		res.end();
	});
}).listen(8080);