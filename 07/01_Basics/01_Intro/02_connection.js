const mongoose = require('mongoose');
let dbConfig = require('./db.config');
async function main() {
    let conString = `${dbConfig.HOST}/${dbConfig.DB}`;
    console.log(`connect to ${conString}`);
    await mongoose.connect(`${conString}`);
}

main()
    .then(data => {
        console.log(data)
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
