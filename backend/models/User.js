const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  password: String,
});

userSchema.methods.login = async function (password) {
  const user = this;
  const isMatch = await bcrypt.compare(password, this.password);
  if (!isMatch) {
    throw new Error("Email or password incorrect");
  }
  return user;
};

userSchema.pre("save", async function (req, res, next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = mongoose.model("users", userSchema);
