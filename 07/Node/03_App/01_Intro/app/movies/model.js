let mongoose = require("mongoose");
let dbConfig = require('../../../../db.config');
let sc = require('./schema');

module.exports = class Movie {
    coll = 'movies';
    Movies = null;

    constructor() {
        mongoose.connect(
            `${dbConfig.HOST}/${dbConfig.DB}`,
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        this.Movies = mongoose.model(this.coll, sc.movieSchema, 'movies');
    }
    /**
     * Gibt alle Filmtitel aus
     */
    getAllTitles() {
        this.Movies.find({},{title:1},
            function(err, movies) {
                console.log(movies);
            });
    }
}
