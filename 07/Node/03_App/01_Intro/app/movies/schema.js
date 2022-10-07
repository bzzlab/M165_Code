let mongoose = require("mongoose");
let movieSchema = mongoose.Schema({
    title : String
});

module.exports = {
    movieSchema
}
