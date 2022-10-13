'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init({
    name: {type: DataTypes.STRING,
    allowNull: false,
  validate:{
    notNull:{
      msg: "Name is required"
    },
    notEmpty:{
      msg: "Name is required"
    }
  }},
    email: {type: DataTypes.STRING,
    allowNull: false,
  validate:{
    notNull:{
      msg: "Email is required"
    },
    notEmpty:{
      msg: "Email is required"
    },
    isEmail:{
      msg: "Email Format must be valid"
    }
  }},
    mobile: {type: DataTypes.STRING,
    allowNull: false,
  validate:{
    notNull:{
      msg: "Mobile is required"
    },
    notEmpty:{
      msg: "Mobile is required"
    }
  }},
    birthDate: {type: DataTypes.DATE,
    allowNull: false,
  validate:{
    notNull:{
      msg: "Birth Date is required"
    },
    notEmpty:{
      msg: "Birth Date is required"
    }
  }},
    address: {type: DataTypes.STRING,
    allowNull: false,
  validate:{
    notNull:{
      msg: "Address is required"
    },
    notEmpty:{
      msg: "Address is required"
    }
  }}
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};