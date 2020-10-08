var express = require("express");
var router = express.Router();

// Import controller
const { getAllStudent } = require("./controller");

/* GET users listing. */
router.get("/", getAllStudent);

module.exports = router;
