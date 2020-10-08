var express = require("express");
var router = express.Router();

// Import controller
const { getAllStudent, postStudent } = require("./controller");

/* GET users listing. */
router.get("/", getAllStudent);
router.post("/", postStudent);

module.exports = router;
