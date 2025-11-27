var express = require("express");
require("./app_api/models/db");

var app = express();
app.use(express.json());

var routesApi = require("./app_api/routes/index");
app.use("/api", routesApi);

app.listen(3000, () => console.log("Server is running on port 3000"));

