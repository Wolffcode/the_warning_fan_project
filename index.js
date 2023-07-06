const express = require('express')
const app = express()
const path = require('path')


app.use(express.static(path.join(__dirname + '/public')))

// here you need to change the ip for yoyr own localhost ip to be able to see the web on your other devices ,"192.168.100.2" example
app.listen(3000,()=>{ 
    console.log('Server running on port', 3000)
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/html/home.html'))
})

