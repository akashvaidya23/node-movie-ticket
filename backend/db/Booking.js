const mongoose = require("mongoose");

const BookingSchemas = new mongoose.Schema({
  total_seats: [{ type: Number }],
  available_seats: [{ type: Number }],
  seat_nos: [{ type: String }],
  booked_seats: [{ type: String }],
});

const Bookings = mongoose.model("Bookings", BookingSchemas);

module.exports = Bookings;
