### Übung 6.02: Löschen eines schlecht bewerteten Films
Das Filmarchivteam ist das Team, das sicherstellt, dass die am besten bewerteten Filme 
in der Datenbank vorhanden sind. Um die User-Experience zu verbessern, möchten sie 
die Filme mit den niedrigsten Bewertungen entfernen. 

Ihre Aufgabe ist es <u>einen Film</u> aus der <code>sample_mflix</code> mit einer hohen Anzahl von IMDb-Stimmen, 
einer niedrigen Durchschnittsbewertung und den wenigsten Auszeichnungen aus der Liste 
der Filme mit niedriger Bewertung zu entfernen. 

```
//Solution: 
use mflix

//check output
db.movies.find(
  {"imdb.rating" : {$lt : 2},"imdb.votes" : {$gt : 50000}},
  {"title" : 1, "awards.won": 1}
).sort({"awards.won":1})

//delete one movie
db.movies.findOneAndDelete(
  {"imdb.rating" : {$lt : 2},"imdb.votes" : {$gt : 50000}},
  {
    "sort" : {"awards.won":1},
    "projection" : {"title" : 1}
  }
)
```