const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LoginSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: "Please create a username."
    },
    password: {
      type: String,
      required: "Create a password."
    }
  }
);

const LoginInfo = mongoose.model("LoginInfo", LoginSchema);

module.exports = LoginInfo;
