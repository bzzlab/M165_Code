/*
Custom functions
*/
//0. Sample query
db.movies.find(
    {$or:[
        {title : /Week/},
        {year : 1920}
    ]},
    {"_id" : 0, title :1, year:1, cast:{$slice: 3}}
)
.sort({year : 1, title:1})


//1. Introduce parameter
let Title = "Week";
db.movies.find(
    {$or:[
        {title : Title},
        {year : 1920}
    ]},
    {"_id" : 0, title :1, year:1, cast:{$slice: 3}}
)
.sort({year : 1, title:1})


//2a. Declare function with one parameter and simplify for testing purpose
let getTitles = function(p1){
    //assign query to variable - list of objects
    let movies = db.movies.find(
        {title: p1}).toArray();
    //iterate through list and print titles
    print(`Result with when searching ${p1}`)
      for(let i =0; i < movies.length; i++){
          print(movies[i].title)
      }
}
//2b. Call function with regex value - titles containing week as string
getTitles(/Week/)

//3. Variations of 2.
let getTitles2 = function(p1,p2){
    let movies = db.movies.find(
        {$or:[
            {"title": p1},
            {"year": p1}
        ]}
        ).sort({year : 1, title:1}).toArray()
  //print output
  print(`Result with when searching ${p1} ${p2}`)
  for(let i=0; i < movies.length; i++){
      print(movies[i].title, movies[i].year)
  }
}

getTitles2(/Week/, 1920)


