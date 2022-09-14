### Übung 5.02: Suchen von Filmen nach Genre und Paginieren von Ergebnissen
Ihr Unternehmen plant eine neue Funktion bereitzustellen, mit der sich Filme 
nach Genre suchen können. 
Ihre Aufgabe ist eine JavaScript-Funktion auf der Mongo-Shell zu erstellen. 
Die Funktion sollte ein Genre nach Wahl des Benutzers akzeptieren und 
alle passenden Titel drucken, wobei die Titel mit den höchsten IMDb-Bewertungen ganz oben 
erscheinen sollten. Neben dem Genre akzeptiert die Funktion zwei weitere Parameter für die Seitengröße und die Seitenzahl. Die Seitengröße definiert, wie viele Datensätze auf einer Seite angezeigt werden müssen, während die Seitenzahl angibt, auf welcher Seite sich der Benutzer gerade befindet. Die folgenden Schritte helfen Ihnen bei der Durchführung dieser Aktivität:

1. Schreiben Sie eine findMoviesByGenre-Funktion, die drei Argumente akzeptiert: 
``` 
   genre, pageNumber, pageSize
```
und die Funktion:
``` 
   let findMoviesByGenre = 
    function(genre, pageNumber, pageSize){
      …
   }
```
2. Schreiben Sie eine Abfrage, um das Ergebnis nach Genre zu filtern und die Titel zurückzugeben.
3. Sortieren Sie die Ergebnisse, um die am besten bewerteten Filme ganz oben anzuzeigen.
4. Verwenden Sie die Logik zum Überspringen und Einschränken der Ergebnisse mithilfe der Parameter pageNumber und pageSize.
5. Konvertieren Sie den Ergebnis-Cursor mithilfe der Methode toArray() in ein Array.
6. Iterieren Sie das resultierende Array und geben Sie alle Titel aus.