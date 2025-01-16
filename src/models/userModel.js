
// userModel.js: User database model

const { DataTypes } = require('sequelize');
const db = require('../database');

// Define the User model
const User = db.define('User', {
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false }, 
  role: { type: DataTypes.STRING, defaultValue: 'User' },
});

module.exports = User;