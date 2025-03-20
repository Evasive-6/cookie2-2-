const jwt = require("jsonwebtoken");

const encrypt = (payload, secret) => {
  const token = jwt.sign(payload, secret, { algorithm: "HS256" });
  return token;
};

module.exports = encrypt;
