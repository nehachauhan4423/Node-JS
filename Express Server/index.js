const express = reuire('express')
const port = 8000;
const app = express();
app.get('/', (req, res) => {
    res.write('<h1>MAHADEV</h1>')
    res.end();
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server is satrt on port:- ${port}`);

})