### Übung 4.02: Kombinieren mehrerer Abfragen
Die kommende Ausgabe des Magazins legt einen besonderen Schwerpunkt auf 
Leonardos Zusammenarbeit mit Regisseur Martin Scorsese. 
Ihre Aufgabe in dieser Übung besteht darin, die ```Titel und Erscheinungsjahre``` 
von ```Dramen oder Kriminalfilmen``` zu finden, bei deren Produktion 
```Leonardo DiCaprio und Martin Scorsese``` zusammengearbeitet haben. 

### Solution

1.The first condition is that Leonardo DiCaprio must be one of the actors and that Martin Scorsese must be the director. 
So you have two conditions with an AND relationship, and is the default relationship when two queries are combined. 
```
db.movies.find(
    {
      "cast": "Leonardo DiCaprio",
      "directors" : "Martin Scorsese"
    }
)
```

2. Now, there is one more AND condition to be added, which is that the movies should be of the drama or crime genres. 
```
db.movies.find(
    {
      "cast": "Leonardo DiCaprio", 
      "directors" : "Martin Scorsese",
      "$or" : [{"genres" : "Drama"}, {"genres": "Crime"}]
    }
)
```

3. The preceding query contains all the expected conditions, but you are only interested in the title and release year. 
For this, add the projection part:
```
db.movies.find(
    {
      "cast": "Leonardo DiCaprio",
      "directors" : "Martin Scorsese",
      "$or" : [{"genres" : "Drama"}, {"genres": "Crime"}]
    },
    {
      "title" : 1, "year" : 1, "_id" : 0
    }
)
```