### Übung 2.01: Eigenes JSON-Dokument erstellen
Nachdem Sie nun die Grundlagen der JSON-Syntax gelernt haben,
ist es an der Zeit, dieses Wissen in die Praxis umzusetzen.
Angenommen Ihre Firma möchte eine NoSQL-Datenbank mit Filmen und Serien erstellen
und in MongoDB speichern.
Als Proof of Concept (POC) auf Basis der vorgegebenen Parameter einen Film
im JSON-Format darzustellen.

1. Erstellen Sie ein JSON-Dokument auf Basis des Films „Die Schöne und das Biest“.
Anbei die Key/Value-Paare.
```
Movie Id = 14253
Movie Title = Beauty and the Beast
Release Year = 2016
Language = English
IMDb Rating = 6.4
Genre = Romance
Director = Christophe Gans
Runtime = 112
```
2. Validieren Sie das Document (z.B. in  https://jsonlint.com/),
ob es grammatikalisch gültig ist.

3. Fügen Sie das Document in die Datenbank MoviesDB, in die Collection movies und
geben Sie das Document in Ihrem Client (DataGrip, Compass usw) aus
