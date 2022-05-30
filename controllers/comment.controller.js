const Comment = require("../models/comment.model");

module.exports.commentController = {
  postComment: (req, res) => {
    Comment.create({
      commentUserName: req.body.commentUserName,
      commentText: req.body.commentText,
      commentTwit: req.body.commentTwit,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },

  deleteComment: (req, res) => {
    Comment.findByIdAndRemove(req.params.id)
      .then((data) => {
        res.json("Комментарий удалён");
      })
      .catch((err) => res.json(err));
  },

  AllComments: (req, res) => {
    Comment.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },

  FindComment: (req, res) => {
    Comment.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },

  patchComment: (req, res) => {
    Comment.findByIdAndUpdate({
      commentUserName: req.body.commentUserName,
      commentText: req.body.commentText,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },
};
