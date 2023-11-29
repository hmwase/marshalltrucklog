const { Sequelize, DataTypes } = require('sequelize');

import sequelize from '../database';
import TruckCheckIn from './TruckCheckIn';

// Define the model for the second form data
const StrippingOut = sequelize.define('StrippingOut', {
  clockNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  newLocation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strippingOutStartTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  strippingOutEndTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  comments: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  truckCheckInId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});


TruckCheckIn.hasMany(StrippingOut, {
    foreignKey: 'truckCheckInId',
    onDelete: 'CASCADE',
});

StrippingOut.belongsTo(TruckCheckIn, {
    foreignKey: 'truckCheckInId',
    onDelete: 'CASCADE',
});





// Synchronize the model with the database
StrippingOut.sync();

export default StrippingOut;