const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema({
  siteName: {
    type: String,
    required: true,
  },

  contactEmail: {
    type: String,
    required: true,
  },

  footerText: {
    type: String,
  },

  logo: {
    type: String,
    default: "",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("settingsSchema", settingsSchema);
