const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  total: {
    type: Number,
  },
  available: {
    type: Number,
  },
  booked: [
    {
      type: String,
    },
  ],
  unbooked: [
    {
      type: String,
    },
  ],
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
