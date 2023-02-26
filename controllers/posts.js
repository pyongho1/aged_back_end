const { Post } = require("../models");

const create = async (req, res) => {
  try {
    req.body.profileId = req.user.profile.id;
    const post = await Post.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

const index = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

const update = async (req, res) => {
  try {
    req.body.profileId = req.user.profile.id;
    const post = await Post.findByPk(req.params.id);
    post.set(req.body);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

module.exports = {
  create,
  index,
  update,
};