const express = require("express");
const path = require("path");
const posts = require("./routes/posts");
const PORT = process.env.PORT || 8000;
const logger = require("./middleware/loggerMiddleware");
const errorHandler = require("./middleware/error");

const app = express();

//middlwares
// setup static folder
// app.use(express.static(path.join(__dirname, "public")));
//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// logger middlware
app.use(logger);

//Routes
app.use("/api/posts", posts);

// error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
