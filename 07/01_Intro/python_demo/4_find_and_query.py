""" Find """

import pymongo

print("Get 'customers' collection:")
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["mydatabase"]
mycol = mydb["customers"]
print(mycol)

print("\nFind the first document in the 'customers' collection:")
x = mycol.find_one()
print("Statement: 'mycol.find_one()'")
print(x)

print("\nReturn all documents in the 'customers' collection, and print each document:")
print("Statement: 'mycol.find()'")
for x in mycol.find():
    print(x)

print("\nReturn only the names and addresses, not the _ids:")
print("Statement: 'mycol.find({},{ '_id': 0, 'name': 1, 'address': 1 })'")
for x in mycol.find({},{ "_id": 0, "name": 1, "address": 1 }):
    print(x)

print("\nThis example will exclude 'address' from the result:")
print("Statement: 'mycol.find({},{ 'address': 0 })'")
for x in mycol.find({},{ "address": 0 }):
    print(x)

print("\nFind document(s) with the address 'Park Lane 38':")
myquery = { "address": "Park Lane 38" }
print(f"Query: '{myquery}'")
mydoc = mycol.find(myquery)
for x in mydoc:
    print(x)

print("\nFind documents where the address starts with the letter 'S' or higher:")
myquery = { "address": { "$gt": "S" } }
print(f"Query: '{myquery}'")
mydoc = mycol.find(myquery)
for x in mydoc:
    print(x)

print("\nFind documents where the address starts with the letter 'S':")
myquery = { "address": { "$regex": "^S" } }
print(f"Query: '{myquery}'")
mydoc = mycol.find(myquery)
for x in mydoc:
    print(x)