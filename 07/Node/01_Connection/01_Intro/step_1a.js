let mongoose = require("mongoose");
mongoose.connect(
    "mongodb://127.0.0.1:27017/mflix",
    { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.on("error", function() {
    console.log("mflix database connection error")
});
mongoose.connection.on("open", function() {
    console.log("Successful connection to mflix database");
});
console.log("Connecting to mflix database in progress...");

