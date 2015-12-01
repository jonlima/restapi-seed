module.exports = function(app){
	var bodyParser = require('body-parser');
	var methodOverride = require('method-override')();
	var cors = require('cors');

	app.set('port', process.env.PORT);
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(methodOverride);
	app.use(cors());
	
};


