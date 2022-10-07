/*
1. Aufgabe:
- Ergänzen Sie das Schema sinnvoll für die Queries
- Erstellen Sie die Queries auf Basis des Console-Outputs
 */


let mongoose = require("mongoose");
let dbConfig = require('../db.config');
mongoose.connect(
    `${dbConfig.HOST}/${dbConfig.DB}`, {
        /* allow users to fall back to the old
        parser if they find a bug in the new parser.
        */
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

let movieSchema = mongoose.Schema({
    title: String
});

const Movies = mongoose.model('movies', movieSchema, 'movies');

console.log("get all movies. Output titles and their languages. ")
Movies.find({}, {title: 1, languages: 1},
    function (err, movies) {
        console.log(movies);
    });


console.log("get plot by title");
//Query hier
console.log("get count by year");
//Query hier
console.log("get count by title");
//Query hier
console.log("meine eigene Query");
//Query hier

