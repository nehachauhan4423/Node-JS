const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PR-7');

const db = mongoose.connection;

db.on("connected",(err)=>{
    if (err) {
        console.log(err);
        return false
    }
    console.log("DATABSE CONNECTED SUCCESSFULLY..!");
})
module.exports = db;