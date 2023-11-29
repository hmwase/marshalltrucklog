import { DataTypes } from 'sequelize';
import sequelize from '@/app/lib/database'; // Adjust the path to your Sequelize configuration

const User = sequelize.define(
  'User',
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
    tableName: 'users', // Adjust the table name if necessary
  }
);

export default User;
