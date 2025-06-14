const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send('Hello')
})
app.get('/a', (req, res)=>{
    res.send('Hello')
})

app.get('/about', (req,res)=>{
    res.send("This is about page")
})

app.get('/login', (req,res)=>{
    res.send('<h1>Please login at chai or code</h1>')
})

app.get('/youtube/one', (req,res)=>{
    res.send('<i>This is youtube<i>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening  on port${[port]}`);
    
})