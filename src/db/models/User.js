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
      linkedIn: {
        type: DataTypes.STRING,
        defaultValue: undefined
      },
      gitHub: {
        type: DataTypes.STRING,
        defaultValue: undefined
      },
      portfolio: {
        type: DataTypes.STRING,
        defaultValue: undefined
      },
      description: {
        type: DataTypes.STRING,
        defaultValue: undefined
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