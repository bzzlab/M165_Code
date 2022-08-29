/*
BASIC MONGODB QUERIES BY
* FINDING DOCUMENTS
* FINDING THE DISTINCT FIELDS
* COUNTING THE DOCUMENTS
*/
show databases

//Switch to mflix
use mflix
/* Basic MongoDB Queries
These queries are based on the top-level (also known as root-level) fields in the documents.
*/

/*
FINDING DOCUMENTS
The most basic query in MongoDB is performed by find() on the collection.
When this method is executed without any argument, it returns all the documents in a collection.
This query calls the find() method on the collection named comments.
*/
db.comments.find()

/*
To find comments that have been added by a specific user (i.e. Lauren Carr) a name field with the value Lauren Carr
has to be added
*/

//SELECT * FROM comments WHERE name = 'Lauren Carr';
db.comments.find({"name" : "Lauren Carr"})

/*
Using findOne()
findOne() returns only one matching record.
This is very useful when you are looking to isolate a specific record.
*/
db.comments.findOne()

/*
You can capture the cursor returned by the find() in a variable and iterate through the elements.
*/

let comments = db.comments.find({"name" : "Lauren Carr"})
if (comments.hasNext) {
    comments.next()
}

/*
FINDING THE DISTINCT FIELDS
The distinct() function is used to get the distinct or unique values of a field with or without query criteria.
Finding the Distinct Fields
The distinct() method is used to get unique values of a field.
*/
db.movies.distinct("rated")

/*
distinct() can also be used along with a query condition.
The following example finds all the unique ratings the films have received
that were released in 1994
*/
db.movies.distinct("rated",{year : 1994})

/*
COUNTING THE DOCUMENTS
*/
db.movies.countDocuments({})
db.movies.countDocuments({"num_mflix_comments" : 6})
