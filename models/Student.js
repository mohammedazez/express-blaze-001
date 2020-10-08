// Import mongoose
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    klub: String,
    required: true,
  },
  class: {
    Teacher: String,
    floor: Number,
  },
});

// Buat nama databasenya
const Student = mongoose.model("studentss", StudentSchema);

// Ekspor
module.exports = Student;
