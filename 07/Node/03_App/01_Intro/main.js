//Model importieren und Objekt Movies zuweisen
const Movies = require('./app/movies/model');
//Movies instanzieren
const movieObj = new Movies();
//Methoden von Movies anwenden
movieObj.getAllTitles();
