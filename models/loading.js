'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loading extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Loading.init({
    clockNumber: DataTypes.STRING,
    loadingstarttime: DataTypes.DATE,
    loadingstoptime: DataTypes.DATE,
    comments: DataTypes.STRING,
    truckCheckInId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Loading',
  });
  return Loading;
};