const Twit = require("../models/Twit.model");

module.exports.twitController = {
  postTwit: (req, res) => {
    Twit.create({
      title: req.body.title,
      text: req.body.text,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },

  deleteTwit: (req, res) => {
    Twit.findByIdAndRemove(req.params.id)
      .then((data) => {
        res.json(data).then((data) => {
          res.json(data);
        });
      })
      .catch((err) => res.json(err));
  },

  patchTwit: (req, res) => {
    Twit.findByIdAndUpdate({
      title: req.body.title,
      text: req.body.text,
    })
      .then((data) => {
        res.json("Твит изменён");
      })
      .catch((err) => res.json(err));
  },

  AllTwits: (req, res) => {
    Twit.find().then((data) => {
      res.json(data);
    });
  },

  TwitsFindId: (req, res) => {
    Twit.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },
};
