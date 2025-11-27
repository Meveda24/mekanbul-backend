const mongoose = require("mongoose");
require("./app_api/models/db");  

const Venue = mongoose.model("Venue");

const venues = [
  { name:"Cafe Pushkin", address:"Tverskoy Blvd 26A, Moscow, Russia", rating:4, foodanddrink:["Beef Stroganoff","Medovik","Russian Tea"], coordinates:[37.6194,55.7636] },
  { name:"Cafe Landtmann", address:"Dr.-Karl-Lueger-Ring 4, Vienna, Austria", rating:5, foodanddrink:["Wiener Melange","Sachertorte","Apple Strudel"], coordinates:[16.3665,48.2092] },
  { name:"Gloria Jean's Coffees", address:"George St, Sydney, Australia", rating:4, foodanddrink:["Latte","Americano","Muffin"], coordinates:[151.2093,-33.8688] },
  { name:"Segafredo Zanetti Espresso", address:"Via del Corso, Rome, Italy", rating:4, foodanddrink:["Espresso","Cappuccino","Cornetto"], coordinates:[12.4964,41.9028] },
  { name:"Costa Coffee", address:"Oxford St, London, UK", rating:4, foodanddrink:["Flat White","Filter Coffee","Cookie"], coordinates:[-0.1276,51.5074] }
];

Venue.insertMany(venues)
  .then(() => { console.log("5 mekan başarıyla eklendi!"); mongoose.connection.close(); })
  .catch(err => console.log("Hata:", err));
