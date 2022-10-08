const User = require("../models/User");

const postUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const login = async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne({ email: req.body.email });
    const login = await user.login(req.body.password);
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "No User Found" });
    }
  } else {
    res.send({ result: "No User Found" });
  }
};

module.exports = { postUser, login };
