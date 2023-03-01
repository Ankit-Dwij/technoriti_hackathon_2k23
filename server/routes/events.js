const router = require("express").Router();
const Event = require("../models/Event");
const { v4: uuidv4 } = require("uuid");

//GET ALL EVENTS
router.get("/allEvents", async (req, res) => {
  const items = await Event.find();
  return res.status(200).json({
    status: "success",
    result: items,
  });
});

router.get("/getEvent", async (req, res) => {
  try {
    const existing = await Event.findOne({ eventId: req.query.eventId });
    if (!existing) {
      return res.status(400).json({
        status: "error",
        message: "EventId does not exist in database",
      });
    }

    return res.status(200).json({
      status: "success",
      event: existing,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      errors: err.message,
    });
  }
});

router.post("/createEvent", async (req, res) => {
  try {
    const newEvent = Event({
      eventId: uuidv4(),
      price: req.body.price,
      title: req.body.title,
      desc: req.body.desc,
      eventDate: new Date(),
      img: req.body.img,
      genre: req.body.genre,
      city: req.body.city,
    });

    await newEvent.save();
    return res.status(200).json({
      status: "success",
      event: newEvent,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      errors: err.message,
    });
  }
});

module.exports = router;
