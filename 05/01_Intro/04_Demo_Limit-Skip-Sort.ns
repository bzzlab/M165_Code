use mflix

/*
Limiting the Result
With limit() you restrict the number of records a query returns.
MongoDB recommends the use of this function as it reduces the number of records
that result from the cursor and improves the speed.

Notes: Setting the limit to zero is equivalent to not setting any limit at all,
therefore all records will be returned.

*/
/*
Let's restrict the result size to 3 records:
*/
db.movies.find(
    {"cast" : "Charles Chaplin"},
    {"title": 1, "_id" :0}
).limit(3)


/*
Skipping Documents
Skipping is used to exclude some documents in the result set and return the rest.
In the following example the first two documents will be excluded from the output.
*/
db.movies.find(
    {"cast" : "Charles Chaplin"},
    {"title": 1, "_id" :0}
).skip(2)


/*
Sorting Documents
Sorting is used to return documents in a specified order.  Without using explicit sorting,
MongoDB does not guarantee the order in which the documents will be returned, which may vary,
even if the same query is executed twice. Having a specific sort order is important during pagination.
Then we execute the query with a specified limit and serve.
*/

/*
The title field with (positive) value 1 means that is sorted in ascending order,
whereas a negative value 1 leads means descending order.
Note: Values < -1, 0 or > 1 are not allowed.0
*/
db.movies.find(
    {"cast" : "Charles Chaplin"},
    {"title" : 1, "_id" :0}
).sort({"title" : 1})

db.movies.find(
    {"cast" : "Charles Chaplin"},
    {"title" : 1, "_id" :0}
).sort({"title" : -1})


/*
Sorting can be performed on multiple fields, and each field can have a different
sorting order.
*/
db.movies.find({}, {_id:0, awards:0})
    .limit(50)
    .sort({"imdb.rating": -1, "year" : 1})
