const mongoose = require("mongoose");
async function connect(){
    let result;
    try {
        result = await mongoose.connect('mongodb://127.0.0.1:27017/mflix');
    } catch (error) {
        result = error;
    }
    return result;
}
connect().then(result => {
    console.log(result);
    console.log(`closing connection ...`);
    mongoose.connection.close();
}).catch(err => {
    console.error(err);
})
