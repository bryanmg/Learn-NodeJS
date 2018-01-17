'use strict';

function render(html,parametros){
	
	var html_string = html.toString();
	var variables = html_string.match(/[^\{\}]+(?=\})/g);

	console.log("=====================");
	console.log(variables);
	console.log("=====================");
	console.log(parametros);
	//

	for (var i = variables.length - 1; i >= 0; i--) {
		var variable =  variables[i];
		html_string = html_string.replace("{"+variables[i]+"}",parametros[variable])
	};

	return html_string;
}

module.exports.render = render;