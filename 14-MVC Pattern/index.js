const express = require('express')

const port = 8070;

const app = express();

app.set('view engine', 'ejs');

app.use('/', require('./routes/IndexRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server start on port ${port}`);

})