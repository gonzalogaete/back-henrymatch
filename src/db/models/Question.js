const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('question', {
     question: {
        type: DataTypes.STRING,
        allowNull: false
     }, 
     answers: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
     }
    }, {timeStamps: false})
}