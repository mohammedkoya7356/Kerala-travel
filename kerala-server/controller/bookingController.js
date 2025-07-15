const Booking = require("../model/booking");

exports.createBooking = async (req, res) => {
  try {
    const { name, phone, date, people, packageTitle } = req.body;
    const newBooking = new Booking({ name, phone, date, people, packageTitle });
    await newBooking.save();
    res.status(201).json({ message: "Booking saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error while saving booking" });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Error fetching bookings" });
  }
};
