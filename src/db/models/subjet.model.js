const { DataTypes } = require('sequelize');
const sequelize = require('../../libs/sequelize');

const subjetSchema = {
    subjet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name_subjet: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    period_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    career_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nivel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
};
  
const Subjet = sequelize.define('Subjet', subjetSchema, {
    tableName: 'subjet',
    timestamps: false,
});  

module.exports = { subjetSchema, Subjet }