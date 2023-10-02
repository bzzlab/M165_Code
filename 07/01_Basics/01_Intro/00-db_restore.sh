#!/usr/bin/env bash
#
profile=~/.bash_profile
db=mflix
clear

echo "Load PATH from ${profile} ..."
if [ ! -f ${profile} ]
then
  echo "Database ${profile} does not exist. No restore possible. Exit!"
  exit 2
fi
source ${profile}

echo "Drop first ${db} ..."
mongosh mongodb://localhost:27017/${db} \
  --eval "db.dropDatabase()"

echo "Show collections of ${db} ..."
mongosh mongodb://localhost:27017/${db} \
  --eval "show collections;"

if [ ! -d ${db} ]
then
  echo "Database ${db} does not exist. No restore possible. Exit!"
  exit 2
fi
echo "Now restore ${db} ..."
mongorestore \
--uri="mongodb://127.0.0.1:27017/${db}" \
--dir=./${db}

echo "Show collections after restore of ${db} ..."
mongosh mongodb://localhost:27017/${db} \
  --eval "show collections;"
