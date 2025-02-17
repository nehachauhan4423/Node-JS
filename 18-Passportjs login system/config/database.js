const moongoose = require('mongoose');
moongoose.connect(`mongodb://localhost/passportjs`)
const db = moongoose.connection;
db.on("connected",(err)=>{
    if (err) {
        console.log(err);
        return false
    }
    console.log(`DATABASE CONNECTED`);
})
module.exports = db;