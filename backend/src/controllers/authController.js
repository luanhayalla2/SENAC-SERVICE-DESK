// authController.js
const { User } = require('../models/User');
const jwt = require('../config/jwt');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

// Login handler
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jsonwebtoken.sign(
      { id: user.id, role: user.role },
      jwt.secret,
      { expiresIn: jwt.expiresIn }
    );
    return res.json({ token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Register handler (basic example)
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashed, role });
    return res.status(201).json({ id: newUser.id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Refresh token handler
exports.refreshToken = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) return res.status(400).json({ message: 'Token missing' });
    const payload = jsonwebtoken.verify(token, jwt.secret);
    const newToken = jsonwebtoken.sign(
      { id: payload.id, role: payload.role },
      jwt.secret,
      { expiresIn: jwt.expiresIn }
    );
    return res.json({ token: newToken });
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Invalid token' });
  }
};
