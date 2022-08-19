### Übung 2.03: Verwenden von Array-Feldern
In dieser Übung sollen Kommentar zum Film hinzugefügt werden. Dabei wird der vollständige Text des Kommentars 
zusammen mit Benutzerdetails wie Name, E-Mail und Datum angeben. 

1. Erweitern Sie das JSON-Dokument aus Übung 2.02 mit zwei Beispiel-Kommentaren:
```
// Comment #1
Name = Talisa Maegyr
Email = oona_chaplin@gameofthron.es
Text = Rem itaque ad sit rem voluptatibus. Ad fugiat...
Date = 1998-08-22T11:45:03.000+00:00
// Comment #2
Name = Melisandre
Email = carice_van_houten@gameofthron.es
Text = Perspiciatis non debitis magnam. Voluptate...
Date = 1974-06-22T07:31:47.000+00:00
```
2. Validieren Sie das Document (z.B. in  https://jsonlint.com/),
ob es grammatikalisch gültig ist.

3. Fügen Sie das Document in die Datenbank MoviesDB, in die Collection movies und
geben Sie das Document in Ihrem Client (DataGrip, Compass usw) aus.