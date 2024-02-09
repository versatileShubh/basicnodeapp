console.log("Hello");

require('dotenv').config();
const express = require('express') // import modules
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("www.shubhamtwitter.com")
})

app.get('/login',(req,res)=>{
    res.send("<h1> Please login to Backend Dev </h1>")
})

app.get('/youtube',(req,res)=>{
    res.send( "<h2>Welcome to my youtube channel</h2>")
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })
