const mongoose = require("mongoose");
const planSchema = new mongoose.Schema(
  {
    planId: String,
    validity: String,
    amount: Number,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Plan", planSchema);
