const { Sequelize, DataTypes } = require('sequelize');

import sequelize from '../database';
import TruckCheckIn from './TruckCheckIn';

// Define the model for the third form data
const Loading = sequelize.define('Loading', {
  clockNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  loadingstarttime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  loadingstoptime: {
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

TruckCheckIn.hasMany(Loading, {
    foreignKey: 'truckCheckInId',
    onDelete: 'CASCADE',
});

Loading.belongsTo(TruckCheckIn, {
    foreignKey: 'truckCheckInId',
    onDelete: 'CASCADE',
});


// Synchronize the model with the database
Loading.sync();

export default Loading;
