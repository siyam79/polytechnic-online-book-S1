const mongoose = require("mongoose");

const semesterSchema = new mongoose.Schema(
  {
    semister: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Semester", semesterSchema);
