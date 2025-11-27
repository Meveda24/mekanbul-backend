var express = require("express");
var router = express.Router();
var ctrlVenues = require("../controllers/venues");

router.get("/venues", ctrlVenues.venuesList);
router.get("/venues/:venueid", ctrlVenues.venueGetOne);
router.post("/venues", ctrlVenues.venueCreate);

module.exports = router;

router.put("/venues/:venueid", ctrlVenues.venueUpdateOne);
router.delete("/venues/:venueid", ctrlVenues.venueDeleteOne);
