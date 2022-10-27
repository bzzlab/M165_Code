## Management and Security
### Backup und Restore 
1. Backup/Dump (Datensicherung)
```mongodump --host localhost --port 27017  --db mflix --out .```
2. Restore (Wiederherstellen)
```mongorestore --host localhost --port 27017 --db mflix --dir ./mflix```


### Export
### Examples
```
# Export theathers out of mflix database
mongoexport --host localhost --port 27017 --db=mflix --collection=theaters
mongoexport --host localhost --port 27017 --db=mflix --collection=theaters --out=mflix_theaters.json
mongoexport --host localhost --port 27017 --db=mflix --collection=theaters --type=CSV \
--fields=location.address,location.address.city,location.address.state
mongoexport --host localhost --port 27017 --db=mflix --collection=theaters --type=CSV \
--fields=location.address.street1,location.address.zipcode,location.address.city,location.address.state  \
--out=mflix_theaters.csv
mongoexport --host localhost --port 27017 --db=mflix --collection=theaters --limit=10 --sort="{theaterId:1}" 
```
Remark
The last export can be checked with a similar query
```
use mflix
db.theaters.find({},{theaterId:1})
.limit(10)
.sort({theaterId:1})
```

Some options explained:
```
--type: This will affect how the documents are printed in the console and defaults to JSON. For example, you can export the data in Comma-Separated Value (CSV) format by specifying CSV.
--fields: This specifies a comma-separated list of keys in your documents to be exported, similar to an export level projection.
--skip: This works similar to a query level skip, skipping documents in the export.
--sort: This works similar to a query level sort, sorting documents by some keys.
--limit: This works similar to a query level limit, limiting the number of documents outputted.
```
More options can be printed with the --help argument
```
mongoexport --help
```

### Import
#### Scenario
Import users from mflix database as contats into mflix database
1. Export users out of mflix 
2. Import users as contacts into mflix_labs
```
# 1. Export users out of mflix
mongoexport --host localhost --port 27017 --db=mflix --collection=users --out=users.json
# 2. Now import users as contacts into mflix_labs
mongoimport --host localhost --port 27017 --db=mflix_labs --collection=contacts --file=users.json
```
More options can be printed with the --help argument
```
mongoimport --help
```

### Secure with simple authentication
Source:
* https://stackoverflow.com/questions/56110254/how-to-run-mongodb-as-a-service-with-authentication-on-a-windows-machine
* https://www.mongodb.com/docs/manual/reference/built-in-roles/#std-label-built-in-roles
#### Steps
1. In Datagrip: Add admin-user i.e. in database mflix
```
use mflix
db.createUser(
   {
     user: "mflixAdmin1",
     pwd: "Hello1234",  // Or  passwordPrompt()
     roles: [ "readWrite", "dbAdmin" ]
   }
)
```
2. On the console: Enable authentication in the configuration.
For Window:
```
# edit
nano '/c/Program Files/MongoDB/Server/6.0/bin/mongod.cfg'
# add
security:
    authorization: enabled
```
... and start mongodb with the change. For Windows either
with WINDOWS+R and services.msc or with sc-Command
```
sc query MongoDB
sc stop MongoDB
sc start MongoDB
```

3. Connect without credentials -> mflix database should not be visible
4. Connect with credentials -> mflix database should be visible
5. Make a test query on the mflix database
