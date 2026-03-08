const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Resume = sequelize.define("Resume", {

  filename: DataTypes.STRING,

  filepath: DataTypes.STRING,

  userId: DataTypes.INTEGER,
});

module.exports = Resume;
