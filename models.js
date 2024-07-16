import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "./usingSequelize.js";
export const User = sequelize.define(
  "User",
  {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default User;

export const Course = sequelize.define("course", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  college: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

//to create the tables in the database

// sequelize.sync().then((res) => {
//   console.log(res);
// });
