const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema(
  {
    publisher: {
      type: String,
      required: true,
    },
    address: { type: String },
    contact: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Publisher", publisherSchema);
