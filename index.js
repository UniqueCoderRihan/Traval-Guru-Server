const express = require('express');
const app = express();
const port = 3000;

const place = require('./AllData/placeInfo.json')

app.get('/',(req,res)=>{
    res.send('Welcome To Traval guru Server. Your Server Is Running')
})

// place information

app.get('/place',(req,res)=>{
    res.send(place)
})

app.listen(port,()=>{
    console.log('Your Server is Running On Port: ',port);
})