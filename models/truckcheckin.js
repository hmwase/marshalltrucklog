'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TruckCheckIn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TruckCheckIn.init({
    pickupNumber: DataTypes.STRING,
    purpose: DataTypes.STRING,
    deliveryContents: DataTypes.STRING,
    company: DataTypes.STRING,
    driversName: DataTypes.STRING,
    driversComments: DataTypes.STRING,
    otherDriver: DataTypes.STRING,
    truckNumber: DataTypes.STRING,
    trailerNumber: DataTypes.STRING,
    trailerType: DataTypes.STRING,
    bolNumber: DataTypes.STRING,
    sealNumber: DataTypes.STRING,
    location: DataTypes.STRING,
    destinationCity: DataTypes.STRING,
    destinationState: DataTypes.STRING,
    inPlantDateTime: DataTypes.DATE,
    exitPlantDateTime: DataTypes.DATE,
    remarks: DataTypes.STRING,
    truckCheckInId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TruckCheckIn',
  });
  return TruckCheckIn;
};