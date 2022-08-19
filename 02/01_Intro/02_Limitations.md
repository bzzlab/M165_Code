### Document Size Limit
A document with too much information is bad in many ways. For this reason, MongoDB puts a __limit of 16 MB__ on the size 
of every document in the collection. The limit of 16 MB is enough to store the right information. 
A collection can have as many documents as you want. There is no limitation on the size of a collection. 
Even if a collection exceeds the space of the underlying system, you can use vertical or horizontal scaling 
to increase the capacity of the collection.

### Nesting Depth Limit
A MongoDB BSON document supports nesting up to 100 levels, which is more than enough. 
Nested documents are a great way to provide readable data. They provide complete information in one go and avoid 
multiple queries to gather a piece of information.

However, as the nesting level increases, performance and memory consumption issues arise. 
For example, consider a driver that is parsing the document to an object structure. 
During the scan, whenever a new sub-document is found, the scanner recursively enters the nested objects 
while maintaining a stack of already read information. This causes high memory utilization and slow performance.

By setting the nesting limit of 100 levels, MongoDB avoids such issues. However, if you can't avoid such deep nesting, 
you can consider splitting the collections into two, or more, and have __document references__.


### Field Name Rules
MongoDB has a few rules about document field names, which are listed as follows:

1. The field name cannot contain a null character.
2. Only the fields in an array or an embedded document can have a name starting with the dollar sign ($). 
For the top-level fields, the name cannot start with a dollar ($) sign.
3. Documents with duplicate field names are not supported. According to the MongoDB documentation, 
when a document with duplicate field names is inserted, no error will be thrown, but the document 
won't be inserted. Even the drivers will drop the documents silently. 
On the mongo shell, however, if such a document is inserted, it gets inserted correctly. 
However, the resulting document will have only the second field. That means the second occurrence of 
the field overwrites the value of the first.
