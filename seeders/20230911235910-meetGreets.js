'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('meet_greets', [{
      event_id: '1',
      band_id: "1",
      meet_start_time: "2023-10-31T18:00:00",
      meet_end_time: "2023-10-31T19:00:00"
    }])
  },

  async down (queryInterface, Sequelize) {
    // Deletes all meet greets
    await queryInterface.bulkDelete('meet_greets', null, {})
  }
};
