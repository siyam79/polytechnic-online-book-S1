const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: { type: String, require: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  roll: { type: String, default: user },
  semister: { type: String },
  profile: { type: String },
  studentId: { type: String },
});

module.exports = mongoose.model("User", userSchema);
