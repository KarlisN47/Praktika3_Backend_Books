
// authMiddleware.js: Middleware for authentication

const jwt = require('jsonwebtoken');

// Checks if JWT is present and valid
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Access denied' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user; // Attach user data to request
    next();
  });
};

module.exports = { authenticateToken };