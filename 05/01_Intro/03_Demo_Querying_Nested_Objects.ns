/*
QUERYING NESTED OBJECTS
Nested or embedded objects can also be represented as values of a field.
Hence, fields that have other objects as their values can be searched using the complete
object as a value.
*/
//Switch to mflix
use mflix

//The following query finds the awards object by providing the complete object as its value:
db.movies.find(
    {awards:
        {wins: 1, nominations: 0, text: "1 win."}
    }
)

/*
When nested object fields are searched with object values, there must be an exact match.
This means that all the field-value pairs, along with the order of the fields,
must match exactly. The following query has changed the order of the query object;
hence, it will return an empty result.
*/
db.movies.find(
    {awards:
        {nominations: 0, wins: 1, text: "1 win."}
    }
)

/*
The dot notation can be used to search nested objects by providing the values of its
fields.
*/
db.movies.find(
    {"awards.wins" : 4},
    {awards: 1, title:1, _id:0}
)

/*
The nested field search is performed independently on the given fields,
irrespective of the order of the elements.
You can search by multiple fields and use any of the conditional or logical query operators.
*/
db.movies.find(
    {
        "awards.wins" : {$gte : 5},
        "awards.nominations" : 6
    },
    {awards: 1, title:1, _id:0}
)
