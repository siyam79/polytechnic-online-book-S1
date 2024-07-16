const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user", enum: ["user", "admin"] },
  semester: { type: String },
  profile: { type: String },
  studentId: { type: String },
});

module.exports = mongoose.model("User", userSchema);
