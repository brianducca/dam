const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  let authHeader = (req.headers.authorization || '');
  if (authHeader.startsWith("Bearer ")) {
    token = authHeader.substring(7, authHeader.length);
  } else {
    return res.status(403).send("A token is required for authentication");
  }
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, 'your_secret_key');
    req.user = decoded;
    console.log(req.user);
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;





