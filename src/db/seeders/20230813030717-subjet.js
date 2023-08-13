'use strict';

const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const subjectData = Array.from({ length: 10 }, () => ({
        name_subjet: faker.lorem.words(2),
        period_id: faker.number.int({ min: 1, max: 5 }),
        career_id: faker.number.int({ min: 1, max: 10 }),
        nivel_id: faker.number.int({ min: 1, max: 3 }),
    }));
  
      await queryInterface.bulkInsert('subjet', subjectData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('subjet', null, {});
  }
};
