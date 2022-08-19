/*
MongoDB Data Types
*/
use DataTypesDB;
/*
---------------------------------------------------------------
STRINGS
---------------------------------------------------------------
*/
//A string with plain-text characters
db.stringDT.insertOne({ name: "Tom Walter", comment: "Name of a person" } )
//A string with random characters and whitespaces
db.stringDT.insertOne( { name: "a ! *& ) ( f s f @#$ s", comment: "random text"} )
db.stringDT.find();
//Type checking
//search for fields with specific datatype
db.stringDT.find( { name: { $type: "string" } } )


/*
---------------------------------------------------------------
NUMBER
---------------------------------------------------------------
double: 64-bit floating point
int: 32-bit signed integer
long: 64-bit unsigned integer
decimal: 128-bit floating point – which is IEE 754-compliant
*/

/*
plainNum is initialized with a sequence of digits without mentioning any
explicit data type. Therefore, by default, it will be treated as a 64-bit
floating-point number (also known as a double).
*/
db.numberDT.insertOne( {plainNum: 1299 } )
/*
explicitInt is initialized with an integer-type constructor and a string
representation of a number, and so MongoDB reads the number in an argument
as a 32-bit integer.
*/
db.numberDT.insertOne( {explicitInt: NumberInt("1299") } )
/*
However, in the explicitInt_double initialization, the number provided in the constructor
argument doesn't have double quotes. Therefore, it will be treated as a 64-bit float—that is,
a double—and used to form a 32-bit integer. But as the provided number fits in the integer range,
no change is seen.
*/
db.numberDT.insertOne( {explicitInt_double: NumberInt(1299) } )
db.numberDT.find();
db.numberDT.find( { plainNum: { $type: "number" } } )

/*
NumberLong wrappers are similar to NumberInt. The only difference is that they are stored as 64-bit integers.
*/
db.numberDT.insertOne( { _id: 4, calc: NumberLong("2090845886852") } )
db.numberDT.updateOne( { _id: 4 }, { $set:  { calc: NumberLong("2555555000000") } } )
db.numberDT.updateOne( { _id: 4 }, { $inc: { calc: NumberLong("5") } } )
db.numberDT.findOne( { _id: 4 } );

/*
NumberDecimal: This wrapper stores the given number as a 128-bit IEEE 754 decimal format.
The NumberDecimal constructor accepts both a string and a double representation of the number
*/
db.numberDT.insertMany([
    {price: NumberDecimal("142.42"), comment: "explicit decimal"},
    {price: NumberDecimal(142.42), comment: "double"},
    {price: NumberDecimal("5999999999.99999999"), comment: "precise as defined"},
    {price: NumberDecimal(5999999999.99999999) , comment: "loss of precision."}
])
/*
It is evident that when a double is passed to NumberDecimal, there is a chance of a
loss of precision (price 3 and 4). Therefore, it is important to always use string-based
constructors when using NumberDecimal.
*/
db.numberDT.find();

db.numberDT.insertMany([
    { _id: 1, value: 1, expectedType: 'Int32' },
    { _id: 2, value: NumberLong("1"), expectedType: 'Long' },
    { _id: 3, value: 1.01, expectedType: 'Double' },
    { _id: 4, value: NumberDecimal("1.01"), expectedType: 'Decimal' },
    { _id: 5, value: 3200000001, expectedType: 'Double' }
])

//Search values by content
db.numberDT.find({"value": 1.01})
db.numberDT.find({"value": 1})
//Search values by datatype
db.numberDT.find({"value": {$type: "int"}})
db.numberDT.find({"value": {$type: "long"}})
db.numberDT.find({"value": {$type: "decimal"}})
db.numberDT.find({"value": {$type: "double"}})
db.numberDT.find({"value": {$type: "number"}})



/*
---------------------------------------------------------------
Boolean
---------------------------------------------------------------
The Boolean data type is used to represent whether something is true or false.
*/
db.boolDT.insertOne( { isMongoDBHard: false, amIEnjoying: true} );
db.boolDT.find()

/*
---------------------------------------------------------------
DATE
---------------------------------------------------------------
- Date() method which returns the current date as a string.
- new Date() constructor which returns a Date object using the ISODate() wrapper.
- ISODate() constructor which returns a Date object using the ISODate() wrapper.
*/
db.dateDT.insertOne( { today: Date(), comment: "current date" } )
db.dateDT.insertOne( { today: new Date(), comment: "current date as ISO Date" } )
db.dateDT.insertOne( { today: ISODate(), comment: "current date as ISO Date" } )
db.dateDT.insertOne( { today: ISODate("2012-12-19T06:01:17.171Z"),
    comment: "for specific date i.e. birthdate " } )
db.dateDT.find();

/*
---------------------------------------------------------------
OBJECTS
---------------------------------------------------------------
The object fields are used to represent nested (verschachtelt) or embedded (eingebettet) documents
—that is, a field whose value is another valid JSON document.
*/
db.objectsDT.insertOne({
  "listing_url": "https://www.airbnb.com/rooms/1001265",
  "name": "Ocean View Waikiki Marina",
  "summary": "A great location that work perfectly for business, education, or simple visit.",
  "host":{
    "host_id": "5448114",
    "host_name": "David",
    "host_location": "Honolulu, Hawaii, United States"
  }
})

db.objectsDT.find();

/*
---------------------------------------------------------------
ARRAYS
---------------------------------------------------------------
A field with an array type has a collection of zero or more values.
In MongoDB, there is no limit to how many elements an array can contain or how many arrays a document
can have. However, the overall document size should not exceed 16 MB.
*/

//array of strings
db.arrayDT.insertOne(
    { pass: ['Albula','Furka', 'Gotthard', 'Grimsel', 'Nufenen', 'Susten', 'Oberalp'],
      country: "Switzerland"})

//complex with different datatypes
db.arrayDT.insertMany([
    // array of strings
    {value: [ "this", "is", "a", "text" ], comment: "array of string"},
    // array of doubles
    {value: [ 1.1, 3.2, 553.54 ], comment: "array of doubles"},
    // array of Json objects
    {objects: [ { "a" : 1 }, { "a" : 2, "b" : 3 }, { "c" : 1 } ], comment: "array of objects"},
    // array of mixed elements
    {mixed: [ 12, "text", 4.35, [ 3, 2 ], { "type" : "object" } ], comment: "mixed array"}
]);

db.arrayDT.find({country: /S/});



/*
---------------------------------------------------------------
NULL
---------------------------------------------------------------
Null is a special data type in a document and denotes a field that does not contain a value.
The null field can have only null as the value.
*/

db.specialDT.insertOne({ pass: null, country: "Danmark"})
db.specialDT.find({country: /D/});


/*
---------------------------------------------------------------
OBJECTID
---------------------------------------------------------------
Every document in a collection must have an _id that contains a unique value.
This field acts as a primary key to these documents.
The primary keys are used to uniquely identify the documents, and they are always indexed.

The ObjectId generates a unique value of 12 bytes, where the first 4 bytes represent the timestamp,
bytes 5 to 9 represent a random value, and the last 3 bytes are an incremental counter.
*/

db.specialDT.insertOne({_id: new ObjectId(), pass: null, country: "Danmark"})
db.specialDT.find({country: /D/});

/*
---------------------------------------------------------------
Binary Data
---------------------------------------------------------------
Binary data, also called BinData, is a BSON data type for storing data that exists in a binary format.
This data type gives you the ability to store almost anything in the database, including files such as text,
videos, music, and more. BinData can be mapped with a binary array in your programming language.
*/

db.specialDT.insertOne({
  "name" : "my_txt",
  "extension" : "txt",
  "content" : BinData(0,"VGhpcyBpcyBhIHNpbXBsZSB0ZXh0IGZpbGUu")
})
db.specialDT.find({extension: "txt"});




/*
---------------------------------------------------------------
TIMESTAMP
---------------------------------------------------------------
MongoDB uses a BSON Timestamp internally in the oplog. The Timestamp type works similarly to the Java
Timestamp type. Use the Date type for operations involving dates.
*/

//Use Timestamp() without parameters to insert multiple documents using the default settings
db.flights.insertMany(
   [
      { no: 'LX233', arrival: "true", ts: Timestamp() },
      { no: 'PB544', arrival: "true", ts: Timestamp() },
      { no: 'XW775', arrival: "true", ts: Timestamp() }
   ]
)


/*
Create a Custom Timestamp
Use custom parameters to insert multiple documents with a specific Timestamp.
This operation inserts three documents into the flights collection and uses the UNIX epoch
value 1627811580 to set the ts times to 9:53 GMT on August 1, 2021.
For creating custom values see https://www.epochconverter.com/
*/
db.flights.insertMany(
   [
      { no: 'LX233', arrival: "true", ts: Timestamp(1627811580, 10) },
      { no: 'PB544', arrival: "true", ts: Timestamp(1627811580, 20) },
      { no: 'XW775', arrival: "true", ts: Timestamp(1627811580, 30) }
   ]
)

db.flights.find();

//Drop database
db.dropDatabase();

