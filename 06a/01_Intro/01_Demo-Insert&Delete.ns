use mflix_demo;
/*
Inserting one Document
The method insertOne() is used to create a new document in a collection.
The function is executed on the collection and takes the document to be inserted as an argument.
*/
db.movies.insertOne({_id: 1, title: "Dunkirk"})

/*
Inserting Multiple Documents
When inserting multiple documents, then either insertOne() method can be used or ...
*/
db.movies.insertOne({_id: 2, title: "Baby Driver"})
db.movies.insertOne({_id: 3, title: "Logan"})
db.movies.insertOne({_id: 4, title: "John Wick: Chapter 2"})
db.movies.insertOne({_id: 5, title: "A Ghost Story"})

/*
... insertMany() by providing an array with all documents as method parameter.
Note: Inserting duplicate keys leads to an error!
*/
db.movies.insertMany([
    {_id:1, title: "Dunkirk"},
    {_id: 2, title: "Baby Driver"},
    {_id: 3, title: "Logan"},
    {_id: 4, title: "John Wick: Chapter 2"},
    {_id: 5, title: "A Ghost Story"}
])

/*
Inserting without _id is possible.
An id of type ObjectId will be generated and added to the document.
*/
db.movies.insertOne({"title": "Thelma"})
db.movies.find({"title" : "Thelma"})

/*
insertMany() works similar.
*/
db.movies.insertMany([
    {"_id" : 9, "title" : "movie_1"},
    {"_id" : 10, "title" : "movie_2"},
    {"title" : "movie_3"},
    {"_id" : 8, "title" : "movie_4"},
])

/* Deleting Using deleteOne()
Method deleteOne() is used to delete a single document from a collection. It accepts a document
representing a query condition. Upon successful execution, it returns a document containing the
total number of documents deleted (represented by the field deletedCount) and whether the operation
was confirmed (given by the field acknowledged).
However, as the method deletes only one document, the value of deletedCount is always one.
If the given query condition matches more than one document in the collection, only the first
document will be deleted.
*/
db.movies.deleteOne({_id: 2})

/*
Deleting Multiple Documents Using deleteMany()
The deleteMany() must be provided with a query condition, and all the documents that match the given query
will be removed
*/
db.movies.deleteMany({title : {$regex: "^movie"}})

/*
The deleteOne() will delete the document that is found first.
deleteMany() will delete all the documents in the collection.
*/
db.movies.deleteOne({})
db.movies.deleteMany({})
/*
In MongoDB, a non-existent field is considered to be null and so the given condition will match
all of the documents in the collection
*/
db.movies.deleteOne({"non_existent_field" : null})
db.movies.deleteMany({"non_existent_field" : null})



/*
Deleting Using findOneAndDelete()
findOneAndDelete() finds and deletes one document from the collection. Although it behaves
similarly to the deleteOne() function, it provides a few more options:
* It finds one document and deletes it.
* If more than one document is found, only the first one will be deleted.
* Once deleted, it returns the deleted document as a response.
* In the case of multiple document matches, the sort option can be used to influence which document gets deleted.
* Projection can be used to include or exclude fields from the document in response.
*/

db.movies.drop()
db.movies.insertMany([
  { "_id" : 11, "title" : "movie_11" },
  { "_id" : 12, "title" : "movie_12" },
  { "_id" : 13, "title" : "movie_13" },
  { "_id" : 14, "title" : "movie_14" },
  { "_id" : 15, "title" : "movie_15" }
])

db.movies.find()
db.movies.find(
      {title : {$regex: "^movie"}},
 ).sort({_id : 1})

db.movies.findOneAndDelete(
      {title : {$regex: "^movie"}},
      {sort : {_id: -1}}
)

