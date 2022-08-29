/*
MONGODB QUERIES BY
* CONDITIONAL OPERATORS
*/
show databases

//Switch to mflix
use mflix
/*
CONDITIONAL OPERATORS
*/
/*
Equals ($eq)
The following queries find and return movies that have exactly 5 comments.
Both queries have the same effect.
*/
db.movies.find({"num_mflix_comments" : 5})
db.movies.find({"num_mflix_comments" : {$eq : 5 }})

//Not Equal To ($ne)
db.movies.find(
    { "num_mflix_comments" :
        {$ne : 5 }
    }
)

/* Greater Than ($gt) and Greater Than or Equal To ($gte)
Movies that had been released after 2015:
*/
db.movies.find(
    {year : {$gt : 2015}}
).count()


//Movies that have been released since January 1, 2000
db.movies.find(
    {"released" :
        {$gte: new Date('2000-01-01')}
    }
).count()

/* Less Than ($lt) and Less Than or Equal To ($lte)
To count the movies that were released in the previous century (before 2000-01-01):
*/
db.movies.find(
    {"released" :
        {$lt : new Date('2000-01-01')}
    }
).count()

/* In ($in) and Not In ($nin)
What if a user wants a list of all movies that have been rated G, PG, or PG-13?
A query with $in operator returns movies rated as either of G, PG, or PG-13:
*/
db.movies.find(
    {"rated" :
        {$in : ["G", "PG", "PG-13"]}
    }
)

/*
The $nin operator stands for Not In and matches all the documents where the value of the field does not match
with any of the array elements
*/
db.movies.find(
    {"rated" :
        {$nin : ["G", "PG", "PG-13"]}
    }
)

/*
To see what happens when you use $nin with a non-existent field,
first, find the total documents you have. Then use $nin with some
values (except null) on a non-existent object.
*/
db.movies.countDocuments()
db.movies.countDocuments(
    {"nef" :
        {$nin : ["a value", "another value"]}
    }
)

//In the following example, add a null value to the $nin array:
db.movies.countDocuments(
    {"nef" :
        {$nin : ["a value", "another value", null ]}
    }
)

