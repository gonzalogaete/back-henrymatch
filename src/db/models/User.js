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
      },
      lastname: {
        type: DataTypes.STRING(20),
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
      },
      gitHub: {
        type: DataTypes.STRING,
      },
      portfolio: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
      },
      interests: {
        type: DataTypes.ARRAY(DataTypes.JSON),
      },
    },
    {
      timestamps: false,
    }
  );
};
