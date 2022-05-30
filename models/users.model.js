const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const Twit = require("./Twit.model");

const userSchema = mongoose.Schema({
  UserName: String,
  saved: [{ ref: "Twit", type: mongoose.SchemaTypes.ObjectId }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
