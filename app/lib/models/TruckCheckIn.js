const { Sequelize, DataTypes } = require('sequelize');

import sequelize from "../database";

const TruckCheckIn = sequelize.define('TruckCheckIn', {
  pickupNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  purpose: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deliveryContents: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  driversName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  driversComments: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  otherDriver: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  truckNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  trailerNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  trailerType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bolNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sealNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destinationCity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destinationState: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  inPlantDateTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  exitPlantDateTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  remarks: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  truckCheckInId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  }
});


sequelize.sync();

export default TruckCheckIn;
