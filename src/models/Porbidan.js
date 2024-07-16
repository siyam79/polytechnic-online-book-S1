const mongoose = require("mongoose");

const probidanSchema = mongoose.Schema({
  probidan: { type: String, require: true },
});

module.exports = mongoose.model("User", userSchema);


// 2010
// 2016
// 2022