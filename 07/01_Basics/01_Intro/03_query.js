const mongoose = require('mongoose');
let dbConfig = require('./db.config');
async function main() {
    let conString = `${dbConfig.HOST}/${dbConfig.DB}`;
    console.log(`connect to ${conString}`);
    await mongoose.connect(`${conString}`, {useNewUrlParser:true, useUnifiedTopology:true});
}

//One schema used
let movieSchema = new mongoose.Schema({
    title : String
});
const Movies = mongoose.model('movies', movieSchema);

main().catch(err => console.log(err))

async function run(){
    await Movies.find()
        .limit(10)
        .then(result => console.log(result))
        .catch(err => console.log(err));
    await Movies.find({title: /Black/},{_id:0, genres:1, casts:1})
        .limit(10)
        .then(result => {
            console.log(result)
        })
        .catch(err => console.log(err));
    await Movies.distinct("rated")
        .then(result => {
            console.log(result)
        })
        .catch(err => console.log(err));
    await mongoose.connection.close()
    }

run();

