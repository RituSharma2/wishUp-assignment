const mongoose = require("mongoose");
const subscriptionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    userName: String,
    planId: {
      type: String,
    },
    validity: Number,

    start_date: Date,
    status: {
      type: String,
      enum: ["SUCCESS", "FAILIURE"],
    },
  },
  { timeStamps: true }
);
module.exports = mongoose.model("subscription", subscriptionSchema);
