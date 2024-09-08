const express = require("express");
const path = require("path");

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

//json api
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.listen(5000, () => console.log(`Server is running on port 5000`));
