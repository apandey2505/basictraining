'use strict';
module.exports = (sequelize, DataTypes) => {
  const jsonraw_DataBase = sequelize.define('jsonraw_DataBase', {
    order_number: DataTypes.STRING,
    order_details: DataTypes.STRING
  }, {});
  jsonraw_DataBase.associate = function(models) {
    // associations can be defined here
  };
  return jsonraw_DataBase;
};