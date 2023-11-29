'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TruckCheckIns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pickupNumber: {
        type: Sequelize.STRING
      },
      purpose: {
        type: Sequelize.STRING
      },
      deliveryContents: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      driversName: {
        type: Sequelize.STRING
      },
      driversComments: {
        type: Sequelize.STRING
      },
      otherDriver: {
        type: Sequelize.STRING
      },
      truckNumber: {
        type: Sequelize.STRING
      },
      trailerNumber: {
        type: Sequelize.STRING
      },
      trailerType: {
        type: Sequelize.STRING
      },
      bolNumber: {
        type: Sequelize.STRING
      },
      sealNumber: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      destinationCity: {
        type: Sequelize.STRING
      },
      destinationState: {
        type: Sequelize.STRING
      },
      inPlantDateTime: {
        type: Sequelize.DATE
      },
      exitPlantDateTime: {
        type: Sequelize.DATE
      },
      remarks: {
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
    await queryInterface.dropTable('TruckCheckIns');
  }
};