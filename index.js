// implement your API here
const express = require("express");
const db = require("./data/db")

const server = express();
server.use(express.json())

server.get('/', (req, res) => {
    res.send("IT WORKS");
  });

//server get method will return a list in JSON format
server.get("/api/users",(req,res)=>{
    db.find()
    .then(users=>{
        res.json(users)
    })
    .catch(err=>{
        res.status(500).json({ error: "The users information could not be retrieved." })
    })
})


server.listen(5000, ()=>{
    console.log('\n*** API running on port 5k ***\n');
})
