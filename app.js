const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

//   import router
const indexRouter = require("./routes/index");
const studentRouter = require("./routes/student");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Import index router
app.use("/", indexRouter);
// untuk mengambil data student
app.use("/student", studentRouter);

module.exports = app;
