
// server.js: Main server file

const express = require('express');
const dotenv = require('dotenv');
const db = require('./database');
const authRoutes = require('./routes/authRoutes');

// Load environment variables
dotenv.config();
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Declare routes
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;

// Connect to the database and start the server
(async () => {
  try {
    await db.sync(); // Synchronize the database
    console.log('Database connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Database connection error:', err);
  }
})();