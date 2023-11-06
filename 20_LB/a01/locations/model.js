//Require mongoose, database config and schema
//??
//??
//??

module.exports = class Locations {
    coll = 'locations';
    modelLocation = null;

    //set constructor
//??
//??
//??
//??

    async #init() {
//??
//??
//??
    }

    /*
    Gegeben: Datenbank 'restaurant', Collection 'locations', Node.js App a01

    Gesucht:
    Programmieren Sie die Methode getLocations, um alle Restaurant-Locations zu erhalten.
    Als Input-Parameter wird das Objekt-Literal findFilter verwendet (für die Query), numOfDocs
    (für die Anzahl Documents) und outputFilter (für die Spalten-Ausgabe) verwendet.
    Siehe Anwendung in main.js.

    */
    async getLocations(findFilter, numOfDocs, outputFilter) {
//??
//??
//??
//??
    }

   /*
   Gegeben: Datenbank 'restaurant', Collection 'locations', Node.js App a01

   Gesucht:
   Programmieren Sie die Methode getLocationCount,
   welche die Anzahl gefundener Locations ausgibt.
   Als Input-Parameter wird das Objekt-Literal findFilter
   verwendet (siehe Anwendung in main.js).

   */
    async getLocationCount(findFilter) {
//??
//??
//??
//??
//??
    }

    /*
   Gegeben: Datenbank 'restaurant', Collection 'locations', Node.js App a01

   Gesucht:
   Programmieren Sie die Methode getLocationDistinctValues,
   welche die Werte als Einmalzählung ausgibt.
   Als Input-Parameter wird das Objekt-Literal findFilter
   verwendet (siehe Anwendung in main.js).

   */
    async getLocationDistinctValues(filter) {
//??
//??
//??
    }


}
