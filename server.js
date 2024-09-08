const express = require("express");
const path = require("path");

const app = express();

//middlwares
// setup static folder
app.use(express.static(path.join(__dirname, "public")));

//Routes
// app.get("/", (req, res) => {
//   // send html files
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

app.listen(5000, () => console.log(`Server is running on port 5000`));
