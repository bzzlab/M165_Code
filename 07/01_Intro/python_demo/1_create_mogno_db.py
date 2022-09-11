""" Create a database called "mydatabase" """

import pymongo

# Check if db exists
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
db_list = myclient.list_database_names()
db_name = "moviesDB"
if db_name in db_list:
    print(f"The database '{db_name}' exists.")
print(db_list)

# Create a collection called "customers":
mydb = myclient["mydatabase"]
mycol = mydb["customers"]
print(mydb.list_collection_names())

# Check if the "customers" collection exists:
collist = mydb.list_collection_names()
if "customers" in collist:
    print("The collection exists.")
