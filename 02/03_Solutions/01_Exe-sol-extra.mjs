use MoviesDB;
db.movies.insertOne({
	"id": 14253,
	"title": "Beauty and the Beast",
	"year": 2016,
	"language": "English",
	"imdb_rating": 6.4,
	"genre": "Romance",
	"director": "Christophe Gans",
	"runtime": 112
});

db.movies.insertOne({
	"id": 14254,
	"title": "Beauty and the Beast - 2",
	"year": 2017,
	"language": "English",
	"imdb_rating": 5.4,
	"genre": "Romance",
	"director": "Christophe Gans",
	"runtime": 112
});

db.movies.insertOne({
	id: 14255,
	title: "Beauty and the Beast - 3",
	year: 2017,
	language: "English",
	imdb_rating: 4.4,
	genre: "Romance",
	director: "Christophe Gans",
	runtime: 112
});
db.movies.find();

//db.dropDatabase();