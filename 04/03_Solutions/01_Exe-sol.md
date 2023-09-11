### Übung 4.01: Suche nach Filmen eines Schauspielers
Stellen Sie sich vor, Sie arbeiten für ein Unterhaltungsmagazin 
und die kommende Ausgabe ist Leonardo DiCaprio gewidmet. 
Die Ausgabe wird einen speziellen Artikel enthalten, und Sie benötigen 
einige Daten, wie z. B. die Anzahl der Filme, in denen er mitgespielt hat, 
das jeweilige Genre und mehr. 
In dieser Übung schreiben Sie Abfragen, um Dokumente nach bestimmten Bedingungen 
zu zählen, unterschiedliche Dokumente zu finden und verschiedene Felder in den 
Dokumenten auszugeben. 

Fragen Sie die Filmsammlung sample_mflix nach Folgendem ab:
1. Die Anzahl der Filme, in denen der Schauspieler mitgespielt hat
2. das Genre dieser Filme 
3. Filmtitel und ihre jeweiligen Erscheinungsjahre 
4. Die Anzahl der Filme, bei denen er Regie geführt hat

### Solution
1. Find the movies in which Leonardo DiCaprio appears by using the cast field.
```bash
db.movies.countDocuments({"cast" : "Leonardo DiCaprio"})
```
2. The genres of the movies is represented by the genres field. Use the distinct() to find the unique genres
```bash
db.movies.distinct("genres", {"cast" : "Leonardo DiCaprio"})
```
3. Using movie titles, you can now find the year of release for each of the actor's movies. As you are only interested in the titles and release years of his movies, add a projection clause to the query:
```bash
db.movies.find(
    {"cast" : "Leonardo DiCaprio"},
    {"title":1, "year":1, "_id":0}
)
```
4. Die Anzahl der Filme, bei denen er Regie geführt hat
```bash
db.movies.countDocuments({"directors" : "Leonardo DiCaprio"})
```