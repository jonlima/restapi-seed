module.exports = function(app){
	var User = app.models.schema.User;
	var controller = {};

	controller.listUser = function(req, res){
		User.findAll().then(function(users){
			res.json(users);
		});
	};

	controller.listOneUser = function(req, res){
		User.find({
			where: {
				id: req.params.id
			}
		}).then(function(user){
			res.status(200).json(user);
		});
	};

	controller.createUser = function(req, res){
		User.create({
			nome: req.body.nome,
			email: req.body.email
		}).then(function(user){
			res.status(200).json(user);
		});
	};

	controller.updateUser = function(req, res){
		User.find({
			where: {
				id: req.params.id
			}
		}).then(function(user){
			if (user) {
				user.updateAttributes({
					nome: req.body.nome,
					email: req.body.email
				}).then(function(user){
					res.status(200).json(user);
				});
			};
		});
	};

	controller.deleteUser = function(req, res){
		User.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(){
			res.status(200).end();
		});
	};


	return controller;
}