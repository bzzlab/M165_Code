/*
MONGODB QUERIES BY
* LOGICAL OPERATORS
*/
show databases

//Switch to mflix
use mflix

/*
REGULAR EXPRESSIONS
*/

/*
In MongoDB queries, regular expressions can be used
Imagine you have typed the word Opera into the search box and want to find all the movies
whose titles contain this character pattern. Then a regular expression query can be used
with the $regex operator.
*/
db.movies.find(
    {"title" : {$regex :"Opera"}},
    {title: 1, year: 1}
)

/*
Caret (^) operator
In the previous example, the titles in the output contained the given word
Opera at any position. To find only the strings that start with the given
regular expression, the caret operator (^) can be used.
*/
db.movies.find(
    {"title" : {$regex :"^Opera"}},
    {title: 1, year: 1}
)

/* Dollar ($) operator
You can also match the strings that end with the given regular expression.
To do this, use a dollar operator ($).
In the following example, you are trying to find movie titles that end with the word "Opera"
*/

db.movies.find(
    {"title" : {$regex :"Opera$"}},
    {title: 1, cast: 1, _id:0}
)

/* Case-Insensitive Search
MongoDB provides the $options operator for this, which can be used for case-insensitive regular expression searches.
The following query retrieves the titles containing the word the in lowercase
*/
db.movies.find(
    {"title" : {"$regex" : "the"}}
).count()

/* Now, try the same query with case-insensitive search. */
db.movies.find(
    {"title" :
        {"$regex" : "the", $options: "i"}
    }
).count()
