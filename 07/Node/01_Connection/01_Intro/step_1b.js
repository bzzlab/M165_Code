let mongoose = require("mongoose");
let dbConfig = require('../db.config');
mongoose.connect(
    `${dbConfig.HOST}/${dbConfig.DB}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.on("error", function() {
    console.log(`${dbConfig.DB} database connection error`);
});
mongoose.connection.on("open", function() {
    console.log(`Successful connection to ${dbConfig.DB} database`);
});
console.log(`Connecting to ${dbConfig.DB} database in progress...`);

