const jwt = require('jsonwebtoken');
const { JWT_EXPIRE, JWT_SECRETKEY } = require('../config')
const generateToken = (user_id) => {
  const token = jwt.sign({ user_id: user_id }, JWT_SECRETKEY, { expiresIn: JWT_EXPIRE, });
  return token;
}

module.exports = generateToken;