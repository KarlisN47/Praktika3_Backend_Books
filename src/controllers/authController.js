// authController.js: Handles authentication and JWT generation

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

// Login function
const login = async (req, res) => {
  const { username, password } = req.body;

  // Find user in the database
  const user = await User.findOne({ where: { username } });
  if (!user) return res.status(404).json({ message: 'User not found' });

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

  // Create JWT
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

module.exports = { login };