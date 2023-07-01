const express = require('express')
const app = express()
const path = require('path')


app.use(express.static(path.join(__dirname + '/public')))

app.listen(3000,()=>{
    console.log('Server running on port', 3000)
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/html/home.html'))
})

app.get('/portfolio',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/html/freecode.html'))
})