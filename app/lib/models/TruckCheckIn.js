const { Sequelize, DataTypes } = require('sequelize');
import Load from "./load";
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
  proNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  carrierNumber: {
    type: DataTypes.STRING,
    allowNull: true,
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
    allowNull: false,
  },
  exitPlantDateTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  loadingStartTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  loadingEndTime: {
    type : DataTypes.DATE,
    allowNull : true,
  },
  strippingStartTime: {
    type: DataTypes.DATE,
    allowNull: true
  },
  strippingEndTime: {
    type: DataTypes.DATE,
    allowNull: true
  },
  scheduledDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  remarks: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  truckCheckInId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  }
});


//  TruckCheckIn.belongsTo(Load);

sequelize.sync();

export default TruckCheckIn;
