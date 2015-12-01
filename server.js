var express = require('express');
var load = require('express-load');
var app = express();
var dotenv = require('dotenv');

dotenv.load();

load('config')
	.then('models/schema.js')
	.then('controllers')
	.then('routes')
	.into(app, function(err, instance){
		if (err) throw err;

		var sequelize = app.models.schema.sequelize;

		sequelize.sync().done(function(){
			app.listen(app.get('port'), function(){
				console.log("Server running !");
			});
		});

	});