'use strict';
module.exports = (sequelize, DataTypes) => {
  const jsonres_DataBase = sequelize.define('jsonres_DataBase', {
    order_number: DataTypes.STRING,
    sales_details: DataTypes.STRING
  }, {});
  jsonres_DataBase.associate = function(models) {
    // associations can be defined here
  };
  return jsonres_DataBase;
};