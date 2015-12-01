module.exports = function(app){
	var controller = app.controllers.user;

	app.route('/users')
		.get(controller.listUser)
		.post(controller.createUser);
		
	app.route('/users/:id')
		.get(controller.listOneUser)
		.put(controller.updateUser)
		.delete(controller.deleteUser);

}