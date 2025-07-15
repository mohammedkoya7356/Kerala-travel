const jwt = require("jsonwebtoken");
const User = require("../model/user"); // Adjust path if needed

// Middleware to protect any logged-in user
exports.protect = async (req, res, next) => {
  let token;

  // Get token from header: "Authorization: Bearer <token>"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, "your_jwt_secret"); // Replace with process.env.JWT_SECRET ideally
    // Attach user to request
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (err) {
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};

// Middleware to allow only admins
exports.adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
};
