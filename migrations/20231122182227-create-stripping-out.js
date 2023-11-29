'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StrippingOuts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clockNumber: {
        type: Sequelize.STRING
      },
      newLocation: {
        type: Sequelize.STRING
      },
      strippingOutStartTime: {
        type: Sequelize.DATE
      },
      strippingOutEndTime: {
        type: Sequelize.DATE
      },
      comments: {
        type: Sequelize.STRING
      },
      truckCheckInId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StrippingOuts');
  }
};