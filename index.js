const express = require('express');
const app = express();
const port = 3000;

const place = require('./AllData/placeInfo.json')
const blog = require('./AllData/blog.json')
const news = require('./AllData/news.json')

app.get('/',(req,res)=>{
    res.send('Welcome To Traval guru Server. Your Server Is Running')
})

// place information

app.get('/place',(req,res)=>{
    res.send(place)
})

// blog infromation
app.get('/blog',(req,res)=>{
    res.send(blog)
})
// news
app.get('/news',(req,res)=>{
    res.send(news)
})
app.listen(port,()=>{
    console.log('Your Server is Running On Port: ',port);
})