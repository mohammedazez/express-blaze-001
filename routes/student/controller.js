// Import model
const { Student } = require("../../models");

module.exports = {
  // Read
  getAllStudent: (req, res) => {
    Student.find()
      .then((result) => {
        res.status(200).json({
          message: "Sukses mendapatkan data student",
          result,
        });
      })
      .catch((error) => {
        res.status(404).json("data tidak ditemukan", error);
      });
  },
  // Create
  postStudent: async (req, res) => {
    const students = await Student.create(req.body);
    try {
      res.json({
        message: "Sukses menambahkan data student",
        students,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
