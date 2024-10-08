const express = require("express");

const router = express.Router();

let posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
];

//json api GET all posts
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
});

// Get a single post
router.get("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    return next(error);
  }
  res.status(200).json(post);
});

// Create new post POST
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    return res.status(400).json({ msg: "Please include a title" });
  }
  posts.push(newPost);

  res.status(201).json(posts);
});

// UPDATE POST

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ msg: `A post with the id of ${id} was not found` });
  }

  post.title = req.body.title;
  res.status(200).json(posts);
});

//DELETE POSTS

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ msg: `A post with the id of ${id} was not found` });
  }

  posts = posts.filter((post) => post.id !== id);

  res.status(200).json(posts);
});

module.exports = router;
