var path = require('path');
var fs = require('fs');
var Sequelize = require('sequelize');
var sequelize = null;
var config = process.env;
var db = {};

module.exports = function(app) {

  if (!sequelize) {
    sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS);
  }


  fs.readdirSync(__dirname)
    .filter(function(file) {
      return (file.indexOf(".") !== 0) && (file !== "schema.js");
    })
    .forEach(function(file) {
      var model = sequelize.import(path.join(__dirname, file));
      db[model.name] = model;
    });

  Object.keys(db).forEach(function(model) {
    if ("associate" in db[model]) {
      db[model].associate(db)
    };
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  return db;

};