### Übung 2.02: Erstellen von verschachtelten Objekten
Das erste Proof of Concept (POC) haben Sie erfolgreich gelöst (Übung 2.01).
Nun sollen die IMDb-Ratings und die Anzahl der Stimmen zum Rating hinzugefügt werden.
Zusätzlich soll der Tomatometer (s. unten mehr) integriert werden, welche die 
Benutzer- und Kritiker-Bewertungen umfassen. 

1. Erweitern Sie das imdb-Rating im JSON-Dokument aus Übung 2.01 mit den Anzahl votes (Stimmen) 
2. Erweitern Sie das JSON-Dokument aus Übung 2.01 mit dem Tomatometer (tomatoes), welches
    - Benutzer (viewer) mit Rating (Decimal) und Anzahl Stimmen (Integer) beinhaltet
    - Kritiker (critics) mit Rating (Decimal) und Anzahl Stimmen (Integer) beinhaltet
    - Ein "frische"-Rating (fresh) beinhaltet (ganze Zahl)
    - Ein "verrottet"-Rating (rotten) beinhaltet (ganze Zahl)

3. Validieren Sie das Document (z.B. in  https://jsonlint.com/),
ob es grammatikalisch gültig ist.

4. Fügen Sie das Document in die Datenbank MoviesDB, in die Collection movies und
geben Sie das Document in Ihrem Client (DataGrip, Compass usw) aus


### WHAT IS THE TOMATOMETER?
The Tomatometer score – based on the opinions of hundreds of film and television critics – 
is a trusted measurement of critical recommendation for millions of fans.

Back in the days of the open theaters, when a play was particularly atrocious, 
the audience expressed their dissatisfaction by not only booing and hissing at the stage, 
but also throwing whatever was at hand – vegetables and fruits included.

The Tomatometer score represents __the percentage of professional critic reviews that 
are positive__ for a given film or television show. 
A Tomatometer score is calculated for a movie or TV show after it receives at least five reviews.