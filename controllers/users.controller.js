const User = require("../models/users.model");

module.exports.userController = {
  usersDelete: (req, res) => {
    User.findByIdAndRemove(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },

  AllUsersGet: (req, res) => {
    User.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },

  usersFindId: (req, res) => {
    User.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },

  addSave: (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
      $push: {
        saved: req.body.save,
      },
    })
      .populate("Twit")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },

  UserCreate: (req, res) => {
    User.create({
      UserName: req.body.UserName,
      saved: req.body.saved,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },
};
