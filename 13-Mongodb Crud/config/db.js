const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/crud`);
const db = mongoose.connection;
db.on("connected", (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`DATABASE SUCCESSFULLY CONECTED`);
})

module.exports = db;