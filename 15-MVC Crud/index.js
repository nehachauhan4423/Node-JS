const express = require('express');

const port= 8040;

const app = express();

app.set('view engine', 'ejs');

const path = require('path')

const db = require('./config/db');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.urlencoded());

app.use('/', require('./routes/indexRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server is start :- ${port}`);
})