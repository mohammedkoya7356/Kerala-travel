const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    date: String,
    people: Number,
    package: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
