const express = require('express');
const mongoose = require('mongoose');
const port = 5000
const app = express()

app.listen(port, ()=> {console.log(`Server started running on port ${port}`)})

app.get('/test', (req,res)=>{
    res.send("Hello World");
})
console.log("server running");