
// database.js: Database connection setup

const { Sequelize } = require('sequelize');

// Create a new Sequelize instance to connect to PostgreSQL
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

module.exports = db;
