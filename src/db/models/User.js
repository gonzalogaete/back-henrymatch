const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      firstname: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // interests: {
      //   type: DataTypes.ARRAY(DataTypes.JSON),
      // },
    },
    {
      timestamps: false,
    }
  );
};