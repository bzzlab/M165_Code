/*
MONGODB QUERIES BY
* LOGICAL OPERATORS
*/
show databases

//Switch to mflix
use mflix

/*
LOGICAL OPERATORS
*/

/*
$and operator
Using the $and operator, you can have any number of conditions wrapped in an array
and the operator will return only the documents that satisfy all the conditions.
When a document fails a condition check, the next conditions are skipped.

I.e. you want to determine the count of unrated movies that were released in 2008.
This query must have two conditions
- The field rated should have a value of UNRATED
- The field year must be equal to 2008
*/
db.movies.countDocuments (
    {$and :
        [{"rated" : "UNRATED"}, {"year" : 2008}]
    }
)
/* the $and operator is implicit and included by default if a query document has more than one condition.
For example, the following query can be rewritten without using the $and operator
*/
db.movies.countDocuments (
    {"rated": "UNRATED", "year" : 2008}
)

/* $or Operator
Using the $or operator, multiple conditions wrapped in an array can passed.
This operator is used when we have multiple conditions and we want to find documents
that match at least one condition.

In the example the query finds all movies that are either rated G,
were released in 2005, or have at least 5 comments.
*/
db.movies.find(
    {$or:[
        {"rated" : "G"},
        {"year" : 2005},
        {"num_mflix_comments" : {$gte : 5}}
   ]},
   {rated: 1, year: 1, num_mflix_comments:1}
)

/*
$nor Operator
The $nor operator is syntactically like $or but behaves in the opposite way.
The $nor operator accepts multiple conditional expressions in the form of an array and returns
the documents that do not satisfy any of the given conditions.
*/
db.movies.find(
    {$nor:[
        {"rated" : "G"},
        {"year" : 2005},
        {"num_mflix_comments" : {$gte : 5}}
    ]},
    {rated: 1, year: 1, num_mflix_comments:1}
)

/* $not Operator
The $not operator represents the logical NOT operation that negates the given condition.
The $not operator accepts a conditional expression and matches all the documents that do not satisfy it.
*/
db.movies.find(
    {"num_mflix_comments" :
        {$not : {$gte : 5} }
    }
)