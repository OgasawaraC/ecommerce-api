const userService = require("../services/userService");

async function create(req, res) {
  try {
    const user = await userService.createUser(req.body);

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = {
  create,
};