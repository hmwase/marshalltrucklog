'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StrippingOut extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StrippingOut.init({
    clockNumber: DataTypes.STRING,
    newLocation: DataTypes.STRING,
    strippingOutStartTime: DataTypes.DATE,
    strippingOutEndTime: DataTypes.DATE,
    comments: DataTypes.STRING,
    truckCheckInId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StrippingOut',
  });
  return StrippingOut;
};