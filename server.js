const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8000;

const app = express();

//middlwares
// setup static folder
// app.use(express.static(path.join(__dirname, "public")));

//Routes
// app.get("/", (req, res) => {
//   // send html files
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

let posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
];

//json api GET all posts
app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});

// Get a single post
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
