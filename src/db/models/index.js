const sequelize = require('../../libs/sequelize');
const { subjetSchema, Subjet } = require('./subjet.model');

const setupInitial = (sequelize) => {
  //Nivel.init(nivelSchema, Nivel.config(sequelize));
  Subjet.init(subjetSchema, Subjet.config(sequelize));
  // Todos los modelos
}

module.exports = setupInitial;