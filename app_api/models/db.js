var mongoose = require("mongoose");

var dbURI = "mongodb+srv://gk247011111_db_user:If46TUkBoShavtal@cluster0.umfvcqg.mongodb.net/mekanbul?retryWrites=true&w=majority";


mongoose.connect(dbURI)
  .then(() => console.log("Mongoose connected to MongoDB Cloud"))
  .catch(err => console.log("Mongoose connection error:", err));

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose disconnected");
});

process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log("Mongoose connection closed due to app termination");
    process.exit(0);
  });
});

require("./venue");


