const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  title: String,
  text: String,
  likes: [ {
    ref: "Like",
    type: mongoose.SchemaTypes.ObjectId
  },
]});

const Twit = mongoose.model("Twit", postSchema);

module.exports = Twit;
