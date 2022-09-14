/*
QUERYING ARRAYS
*/
show databases
//Switch to mflix
use mflix

/*
Finding an Array by an Element
Querying over an array is similar to querying any other field.
In the movies collection, there are several arrays, and the cast field is one of them.
Consider that, in your movies service, the user wants to find movies starring the actor Charles Chaplin.
To create the query for this search, use an equality check on the field:
*/
db.movies.find({"cast" : "Charles Chaplin"})

/*
Now, imagine the user wants to search for movies with the actors Charles Chaplin and Edna Purviance together.
For this query, you will use the $and operator:
*/
db.movies.find(
    {$and :[
        {"cast" : "Charles Chaplin"},
        {"cast": "Edna Purviance"}
    ]}
)


/*
Finding an Array by an Array
In the previous examples, we were searching for arrays using the value of an element.
Similarly, array fields can also be searched using array values.
However when you search an array field using an array value, the elements and their order must match.
*/

/*
The documents in the movies collection have an array to indicate how many languages the movie is available in.
Let's assume that user wants to find movies that are available in both English and German.
*/

db.movies.find(
    {"languages" : ["English", "German"]},
    {title:1, languages:1}
).count()

//let's change the order of the array elements and search again
db.movies.find(
    {"languages" : ["German", "English"]},
    {title:1, languages:1}
).count()


/* Searching an Array with the $all Operator
The $all operator finds all those documents where the value of the field contains
all the elements, irrespective of their order or size:
*/
db.movies.find(
    {"languages":{
        "$all" :["English", "German"]
    }},
    {title:1, languages:1, _id:0}
)