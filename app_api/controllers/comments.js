const mongoose = require("mongoose");
const Venue = mongoose.model("Venue");

// --- Ortalama Hesaplama Fonksiyonu ---
const calculateLastRating = function (incomingVenue, isDeleted) {
  let sumRating = 0;
  let avgRating = 0;

  const numComments = incomingVenue.comments.length;

  if (incomingVenue.comments) {
    if (numComments === 0 && isDeleted) {
      avgRating = 0;
    } else {
      for (let i = 0; i < numComments; i++) {
        sumRating += incomingVenue.comments[i].rating;
      }
      avgRating = Math.ceil(sumRating / numComments);
    }
  }

  incomingVenue.rating = avgRating;
  incomingVenue.save();
};

// --- POST: Yorum Ekle ---
module.exports.addComment = async function (req, res) {
  try {
    const venueId = req.params.venueid;
    const venue = await Venue.findById(venueId);

    if (!venue) {
      return res.status(404).json({ message: "Mekan bulunamadı" });
    }

    venue.comments.push({
      author: req.body.author,
      text: req.body.text,
      rating: req.body.rating
    });

    await venue.save();

    // Ortalama hesapla
    calculateLastRating(venue, false);

    res.status(201).json({ message: "Yorum eklendi", venue });
  } catch (err) {
    res.status(400).json(err);
  }
};
