// Import dotenv untuk .env
require("dotenv").config();
// Import mongoose
const mongoose = require("mongoose");

// Import .env
const URI = process.env.DB_LIVE || "mongodb://localhost/school";

// Konekan URI
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Ekspor
const database = mongoose.connection;
module.exports = database;
