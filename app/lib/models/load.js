const { Sequelize, DataTypes } = require("sequelize");

import sequelize from "../database";

const Load = sequelize.define(
  "Load",
  {
    LoadId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    loadSet: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    scheduledDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    destination: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    proNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    carrier: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isCheckedIn: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    defaultScope: {
      where: {
        isCheckedIn: false,
      },
    },
  }
);

sequelize
  .sync()
  .then(() => {
    console.log("YourModel table created successfully.");
  })
  .catch((err) => {
    console.error("Error creating YourModel table:", err);
  });

export default Load;
