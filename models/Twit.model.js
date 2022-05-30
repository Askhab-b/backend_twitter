const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  title: String,
  text: String,
  likes: {
    type: Number,
    default: 0,
  },
});

const Twit = mongoose.model("Twit", postSchema);

module.exports = Twit;
