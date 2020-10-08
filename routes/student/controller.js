// Import model
const { Student } = require("../../models");

module.exports = {
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
};
