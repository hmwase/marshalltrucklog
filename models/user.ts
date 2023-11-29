// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };

// models/User.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '@/app/lib/database'; // Adjust the path to your Sequelize configuration

class User extends Model {
  public id!: number;
  public email!: string;
  public password!: string;

  // Other fields and methods here

  // Define your User model here
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Other fields here
  },
  {
    sequelize,
    modelName: 'User', // Make sure the model name matches the name you import
    tableName: 'users', // Adjust the table name if necessary
  }
);

export default User;
