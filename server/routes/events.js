const router = require("express").Router();
const { Event } = require("../models/Event");

//GET ALL EVENTS
router.get("/allEvents", async (req, res) => {
  const options = {
    page: req.query.page || 1,
    limit: req.query.limit || process.env.pagination_limit || 10,
    collation: {
      locale: "en",
    },
    sort: "-eventDate",
  };

  const items = await Event.paginate({}, options);
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

module.exports = router;
