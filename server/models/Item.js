const mongoose = require("mongoose");

module.exports = mongoose.model("Item", new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  location: String,
  type: String, // lost or found
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now }
}));
