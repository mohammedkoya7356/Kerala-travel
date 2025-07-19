const jwt = require('jsonwebtoken');
const User = require('../model/user');

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET || 'defaultSecretKey',
    { expiresIn: process.env.JWT_EXP || '3d' }
  );
};

// Register New Admin/User
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    const newUser = new User({
      name,
      email,
      password, // password hashing handled in model pre-save
      role: role || 'user',
    });

    await newUser.save();

    const token = generateToken(newUser);

    return res.status(201).json({
      message: 'Registration successful',
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err) {
    console.error('Registration error:', err.message);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

// Admin Login Only
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.warn(`Login failed: No user found with email ${email}`);
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      console.warn(`Login failed: Invalid password for ${email}`);
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    if (user.role !== 'admin') {
      console.warn(`Unauthorized login attempt by non-admin user: ${email}`);
      return res.status(403).json({ message: 'Access denied: Admins only.' });
    }

    const token = generateToken(user);

    return res.status(200).json({
      message: 'Admin login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role, // ✅ frontend expects this!
      },
    });
  } catch (err) {
    console.error('Login error:', err.message);
    return res.status(500).json({ message: 'Server error during login.' });
  }
};
