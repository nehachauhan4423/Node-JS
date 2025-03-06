const express = require('express');

const app = require(app);

const port = 9080;


app.get('/users',(req,res)=> {
    return res.status(200).json({
        success : true,
        message : 'User Fetch',
        users : [
            {id:1,name : "kunjal",phone : 56418},
            {id:2,name : "janavi",phone : 12974},
            {id:3,name : "brijal",phone : 95317},
            {id:4,name : "bumika",phone : 93176},
            {id:5,name : "dhruvi",phone : 97315}
        ]
    })
})

app.listen(port,(err)=> {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server is start on port ${port}`);
    
})