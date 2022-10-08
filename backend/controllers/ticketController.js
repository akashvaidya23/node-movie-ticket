const Ticket = require("../models/ticketModel");

const ticktUpdate = async (req, res) => {
  try {
    const tickets = await Ticket.create(req.body);
    res.status(200).send({
      status: "successful",
      data: tickets,
    });
  } catch (e) {
    res.status(404).send(e.message);
  }
};

const getTicket = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).send({
      status: "successful",
      data: tickets,
    });
  } catch (e) {
    res.status(404).send(e.message);
  }
};

const updateTicket = async (req, res) => {
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(
      "63416c99827eac4f56b08344",
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send({
      status: "successful",
      data: updatedTicket,
    });
  } catch (e) {
    res.status(404).send(e.message);
  }
};

module.exports = { ticktUpdate, getTicket, updateTicket };
