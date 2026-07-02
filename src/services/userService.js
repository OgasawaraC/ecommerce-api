const User = require("../models/User");

async function createUser(userData) {
  const user = await User.create(userData);

  return user;
}

module.exports = {
  createUser,
};