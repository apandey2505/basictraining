'use strict';
module.exports = (sequelize, DataTypes) => {
  const jsonraw_Database_new = sequelize.define('jsonraw_Database_new', {
    order_number: DataTypes.STRING,
    order_details: DataTypes.STRING
  }, {});
  jsonraw_Database_new.associate = function(models) {
    // associations can be defined here
  };
  return jsonraw_Database_new;
};