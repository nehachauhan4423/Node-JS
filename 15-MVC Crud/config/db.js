const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvc-crud');

const db = mongoose.connection;

db.on("connected",(err)=>{
    if (err) {
        console.log(err);
        return false
    }
    console.log("DATABSE CONNECTED SUCCESSFULLY..!");
})
module.exports = db;