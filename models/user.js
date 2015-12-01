module.exports = function(sequelize, DataType){

	var User = sequelize.define('User', {
		nome: DataType.STRING,
		email: DataType.STRING
	});

	return User;
};