const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true, // page_view or email_click
    },
    page: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Analytics", analyticsSchema);
