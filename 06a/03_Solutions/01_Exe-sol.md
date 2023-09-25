### Übung 6.01: Löschen eines von vielen übereinstimmenden Dokumenten
In dieser Übung löschen Sie Dokumente anhand verschiedener Queries

1. Stellen Sie die Datenbank ```mflix_labs``` im Verzeichnis ```06/02_Exercises/mflix_labs``` wieder her.
```
//Solution:
mongorestore --host localhost --port 27017 --db mflix_labs --dir ./mflix_labs
//Bemerkung:
mongodump --host localhost --port 27017  --db mflix_labs --out .
```
2. Löschen Sie alle Filme, welche weder in der Staffel 1 bis 8 noch in den Teilen 1 bis 6 sind.
(Hinweis: Es sind total 8 Filme)
```
//Solution:
db.movies.deleteMany({
    $nor: [
        {title: {$regex: /Staffel [1-8]:/}},
        {title: {$regex: /Part_[1-6]$/}}
    ]
})
```

3. Löschen Sie alle Filme der Staffel 10. (Hinweis: Es sind total 6 Filme)
```
db.movies.deleteMany(
        {title: {$regex: /Staffel 10/}},
)
```
4. Löschen Sie - in einer Query - alle Filme der Staffel 3 und 6. (Hinweis: Es sind total 20 Filme)
```
db.movies.deleteMany(
        {title: {$regex: /Staffel [3|6]/}},
)
```
5. Löschen Sie - in einer Query - alle Filme der Teile 2 und 4. (Hinweis: Es sind total 14 Filme)
```
db.movies.deleteMany(
        {title: {$regex: /Part_[2|4]/}},
)
```
