var mongoose = require("mongoose");
var Venue = mongoose.model("Venue");

// GET: Tüm mekanları listele
module.exports.venuesList = async function (req, res) {
  try {
    const venues = await Venue.find();
    res.status(200).json(venues);
  } catch (err) {
    res.status(400).json(err);
  }
};

// GET: Tek mekan detayını getir
module.exports.venueGetOne = async function (req, res) {
  try {
    const venue = await Venue.findById(req.params.venueid);

    if (!venue) {
      return res.status(404).json({ message: "venueid bulunamadı" });
    }

    res.status(200).json(venue);
  } catch (err) {
    res.status(400).json(err);
  }
};
// POST: Yeni mekan ekle
module.exports.venueCreate = async function (req, res) {
  try {
    const venue = await Venue.create({
      name: req.body.name,
      address: req.body.address,
      rating: req.body.rating,
      foodanddrink: req.body.foodanddrink,
      coordinates: req.body.coordinates
    });
    res.status(201).json(venue);
  } catch (err) {
    res.status(400).json(err);
  }
};

// PUT: Tek mekan güncelle
module.exports.venueUpdateOne = async function (req, res) {
  try {
    const venue = await mongoose.model("Venue").findById(req.params.venueid);
    if (!venue) {
      return res.status(404).json({ message: "venueid bulunamadı" });
    }

    // Sadece body'deki alanları güncelle
    if (req.body.name) venue.name = req.body.name;
    if (req.body.address) venue.address = req.body.address;
    if (req.body.rating !== undefined) venue.rating = req.body.rating;
    if (req.body.foodanddrink) venue.foodanddrink = req.body.foodanddrink;
    if (req.body.coordinates) venue.coordinates = req.body.coordinates;

    const updatedVenue = await venue.save();
    res.status(200).json(updatedVenue);
  } catch (err) {
    res.status(400).json(err);
  }
};
// DELETE: Tek mekan sil
module.exports.venueDeleteOne = async function (req, res) {
  try {
    const venue = await mongoose.model("Venue").findById(req.params.venueid);
    if (!venue) {
      return res.status(404).json({ message: "venueid bulunamadı" });
    }

    await venue.remove();
    res.status(200).json({ message: "Mekan başarıyla silindi" });
  } catch (err) {
    res.status(400).json(err);
  }
};
