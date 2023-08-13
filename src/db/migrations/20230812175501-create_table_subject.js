'use strict';

const { subjetSchema } = require('../models/subjet.model')
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('subjet', subjetSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('subjet');
  }
};
