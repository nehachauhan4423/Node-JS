const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/MVC-crud`);

const db = mongoose.connection;

db.on("connected", (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`DATABASE CONNECTED`);
})
module.exports = db;

