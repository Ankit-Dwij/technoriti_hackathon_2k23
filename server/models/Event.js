const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    eventId: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    price: { type: Number },
    desc: { type: String },
    img: { type: String },
    genre: { type: String },
    city: { type: String },
    ticketsLeft: { type: Number },
    eventDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
