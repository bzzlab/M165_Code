### Übung 5.01: Suche nach Filmen nach verschiedenen Kriterien

In der ```mflix```-Datenbank sollen Sie nach folgenden Kriterien durchsuchen:

1. Geben Sie alle Filme aus, wo die beiden Schauspieler 'Martin und Sinatra' (nur Nachname bekannt)
zusammen aufgetreten sind. Tipp: Klammern Sie für die Suche die Nachnamen mit Slashes (/) ein.
```
//Solution:
db.movies.find(
    {$and :[
        {"cast" : /Martin/},
        {"cast": /Sinatra/}
    ]}
)
```

2. Geben Sie alle Filme aus, welche unter anderen Sprachen, sowohl Französisch wie auch Deutsch
unterstützen.
```
//Solution: 
db.movies.find(
    {"languages":{
        "$all" :[ "French", "German"]
    }},
    {title:1, languages:1, _id:0}
).count()

//Alternative
db.movies.find(
    {$and :[
        {"languages" : "French"},
        {"languages" : "German"}
    ]}
).count()
```

3. Sie und Ihr Freund möchten sich in Italienisch und Französisch verbessern und dazu einige Filme suchen, 
welche beide Sprachen enthalten. Ihre Suche hat 14 Film-Titel zutage gefördert und Ihr Freund dagegen 21 Filme. 
Was könnte die Ursache für die unterschiedlichen Resultate sein?
Beantworten Sie die Frage, indem Sie (als Beleg) auch die entsprechende Query angeben.
```
//Solution: Die Reihenfolge bei der Abfrage der Array-Elemente ist relevant!
db.movies.find(
    {"languages":["Italian","French"]},
    {title:1, languages:1, _id:0}
).count()

db.movies.find(
    {"languages":["French","Italian"]},
    {title:1, languages:1, _id:0}
).count()
```

4. Sie möchten die sieben Filme von einer italienischen Schauspielerin suchen, welche den Teilstring "Martin"
im Nachnamen hat. Die Ausgabe soll nur ihren vollen Vor- und Nachnamen beinhalten, d.h. die anderen Schauspieler 
sollen NICHT ausgegeben werden. Tipp: Klammern Sie für die erste Suche den Teilstring mit Slashes (/) ein.
```
//Solution: 
db.movies.find(
    {cast : /Martin/ },
    {"cast.$": 1, languages :1, title:1}
)

db.movies.find(
    {"cast" : "Elsa Martinelli" },
    {"cast": 1, languages :1, title:1}
).count()
```

5. Suchen Sie die Filme, wo "Jerry Lewis" (verstorbener Komiker) mitgewirkt hat und geben Sie bei der Ausgabe, die ersten
drei Schauspieler aus. Wählen Sie nun jenen Film aus, wo ein sehr berühmter Schauspieler mitgewirkt, mehr als 25000
Sichtungen erhalten hat und nicht älter als 1980 ist. Schauen Sie sich anschliessend den Trailer auf Youtube an und überlegen
Sie sich, ob Sie sich mit der Bewertung des Tomatormeters (Viewer) einverstanden geben.
```
db.movies.find(
    {$and:[
        {"cast" : "Jerry Lewis" },
        {year : {$gte: 1980}},
        {"tomatoes.viewer.numReviews" : {$gte: 25000}},
    ]},
    {"cast": {$slice: 3}, languages :1, title:1, year:1, _id:0, tomatoes:1}
)

// "title": "The King of Comedy", "title": "Arizona Dream"
```

6. Suchen Sie den Film, welcher 8 Oscars erhalten hat und die Geschichte eines berühmten Musikers portraitiert.
```
//Solution
db.movies.find(
    {
        "awards.text" : /8 Oscars/
    },
    {awards: 1, title:1, _id:0}
)
//-> Amadeus
```

7. Wieviele Filme haben einen Besucher-Tomatometer von mindestens 99%?  
```
//Solution
db.movies.find(
    {
        "tomatoes.viewer.meter" : {$gte:99}
    },
    {title:1, _id:0, "tomatoes.viewer.meter":1 }
).count()
```