var mongoose = require("mongoose");

var venueSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: String,
    rating: { type: Number, default: 0, min: 0, max: 5 },
    foodanddrink: [String],
    coords: { type: [Number], index: '2dsphere' }
});

mongoose.model('Venue', venueSchema);
