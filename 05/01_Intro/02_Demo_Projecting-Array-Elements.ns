/*
PROJECTING ARRAY ELEMENTS

In MongoDB, projection means selecting only the necessary data rather than selecting
whole of the data of a document.

There are a few ways to limit how many elements of an array are returned in the query output.
The following demos will you show
* how to limit the result set when we search with an array field.
* how to return specific elements from an array based on their index position.

*/
//Switch to mflix
use mflix
/*
Projecting Matching Elements Using ($)
You can search an array by an element value and use projection to exclude all but the
first matching element of the array using the $ operator.
*/

/*
Although the query is intended to find Syriac-language movies,
the output array contains other languages as well.
*/
db.movies.find(
    {"languages" : "Syriac"},
    {"languages" :1}
)
//Now, see what happens when you use the $ operator:
db.movies.find(
    {"languages" : "Syriac"},
    {"languages.$" :1}
)

/*
Projecting Matching Elements by their Index Position ($slice)
The $slice operator is used to limit the array elements based on their index position.
This operator can be used with any array field, irrespective of the field being queried or not.
This means that you may query a different field and still use this operator to limit the elements of the array fields.

To see this, we will use the movie "Youth Without Youth" as an example, which has 11 elements in the languages array:
*/
db.movies.find(
    {title : "Youth Without Youth"},
    {languages :1, released:1, directors:1}
)

//In the following query, use $slice to print only the first three elements of the array:
db.movies.find(
    {title : "Youth Without Youth"},
    {languages :{$slice: 3}, released:1, directors:1}
)

/* The $slice operator can be used in a few more ways.
The following projection expression will return the last two elements of the array:
*/
db.movies.find(
    {title : "Youth Without Youth"},
    {languages :{$slice: -2}, released:1, directors:1}
)

/*
The $slice operator can also be passed with two arguments, where the first argument indicates the number
of elements to be skipped and the second one indicates the number of elements to be returned.
*/
db.movies.find(
    {title : "Youth Without Youth"},
    {languages :{$slice:  [2,4]}, released:1, directors:1}
)

