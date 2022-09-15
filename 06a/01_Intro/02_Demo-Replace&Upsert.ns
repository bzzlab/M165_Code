/*
REPLACING DOCUMENTS
Replacing Documents
Sometimes you may want to replace completely an incorrectly inserted document in a collection.
Or consider that, often, the data stored in documents is changed over time.
Or, perhaps, to support your product's new requirements, you may want to alter the way your documents
are structured or change the fields in your documents. In all such cases, you will need to replace the documents.
*/

db.users.insertMany([
  {"_id": 2, "name": "Jon Snow", "email": "Jon.Snow@got.es"},
  {"_id": 3, "name": "Joffrey Baratheon", "email": "Joffrey.Baratheon@got.es"},
  {"_id": 5, "name": "Margaery Tyrell", "email": "Margaery.Tyrell@got.es"},
  {"_id": 6, "name": "Khal Drogo", "email": "Khal.Drogo@got.es"}
])
db.users.find()

/*
Now suppose the user Margaery Tyrell gets married to Joffrey Baratheon, and she wishes to change
her surname to her husband's. To accomplish this, you will have to change her name as well as her email.
*/
db.users.replaceOne(
  {"_id" : 5},
  {"name": "Margaery Baratheon", "email": "Margaery.Baratheon@got.es"}
)
db.users.find()

/*
UPSERT
Upsert means: update (if found) or insert (if not found)
Upsert is a feature provided by many databases and MongoDB supports it as well.

Why Use Upsert?
Upsert sounds a bit unnecessary—especially when the same operation can be performed easily using
two different commands. For example, we can first execute a replace command and check the results.
The value of the matched count will tell whether the document is found in the collection.
If the document is not found, we can then execute an insert command.

However, in real-world scenarios, you will mostly be doing these operations in large numbers.
Consider that your system receives daily updates from a user server, where the server sends
you all the documents that were modified during the day. These daily updates might include
records of the new users signed up with the server as well as changes to the existing users' profiles.
On a large-scale system, performing a two-step update or insert operation for each of the
records will be very time-consuming and error prone. Having a dedicated command, you can simply
prepare and execute an upsert command for each of the records you receive and let MongoDB
do the update or insert.
*/
db.users.find()
/*
At the end of an episode, King Joffrey has been killed. As a result, Margaery wants to switch back to
her old surname, and Tommen Baratheon becomes the new king. The update you receive from the user server
contains the updated record for Margaery and the new record for Tommen, as follows:
*/
db.users.replaceOne(
  {"name" : "Margaery Baratheon"},
  {"name": "Margaery Tyrell", "email": "Margaery.Tyrell@got.es"},
  { upsert: true }
)
db.users.replaceOne(
  {"name" : "Tommen Baratheon"},
  {"name": "Tommen Baratheon", "email": "Tommen.Baratheon@got.es"},
  { upsert: true }
)

/*
Replacing Using findOneAndReplace()
MongoDB findOneAndReplace() returns the counts of matched and updated documents with additional options:
* It finds one document and replaces it.
* If more than one document is found matching the query, the first one will be replaced.
* A sort option can be used to influence which document gets replaced if more than one document is matched.
* By default, it returns the original document.
* If the option of {returnNewDocument: true} is set, the newly added document will be returned.
* Field projection can be used to include only specific fields in the document returned in response.
*/

db.movies.insertMany([
    { "_id": 1011, "title" : "Macbeth" },
    { "_id": 1513, "title" : "Macbeth" },
    { "_id": 1651, "title" : "Macbeth" },
    { "_id": 1819, "title" : "Macbeth" },
    { "_id": 2117, "title" : "Macbeth" }
])

/*
Now, say that these five movies, all having the same title, were released and inserted in different calendar years.
When these records were originally inserted, the field for the year of release wasn't added. As a result, to find
the latest movie with this title, you need to use the incremental _id field, where the movie with the largest _id
value is the latest one. To make future find queries simpler, find the document of the latest movie with this title
and add a flag of latest: true to that document.
*/

db.movies.findOneAndReplace(
    {"title" : "Macbeth"},
    {"title" : "Macbeth", "latest" : true},
    {
        sort : {"_id" : -1},
        projection : {"_id" : 0}
    }
)

db.movies.find({"title" : "Macbeth"})

db.movies.findOneAndReplace(
    {title : "Macbeth"},
    {title : "Macbeth", latest : true},
    {
        sort : {_id : -1},
        projection : {_id : 1, title:1},
        returnNewDocument : true
    }
)
