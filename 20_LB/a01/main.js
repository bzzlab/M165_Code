//Require mongoose and database model
//??
//Import movies model
//??
//Instantiate movies model as object
//??

//Assign queries as promises

let query1 = locationObj
    .getLocations({name: /China/},10,
        {_id: 0, name: 1, borough:1, cuisine:1});
let query2 = locationObj
    .getLocationCount({name: /Pizzeria/});
let query3 = locationObj
    .getLocationCount({name: /Dragon/});
let query4 = locationObj
    .getLocationDistinctValues("address.zipcode");



//run queries asynchronously with Promise.all
//??
    //try-catch
//??
//??
//??
//??
//??
        //rejectReason of any first rejected promise
//??
//??
    //close connection
//??
//??

//call run
run().catch(err => console.error(err));
