// implement your API here
const express = require("express");
const db = require("./data/db")

const server = express();
server.use(express.json())

server.get('/', (req, res) => {
    res.send("IT WORKS");
  });
//---------------------------------------------------------------------
//server get method will returns an array of all the user objects
server.get("/api/users",(req,res)=>{
    db.find()
    .then(users=>{
        res.json(users)
    })
    .catch(err=>{
        res.status(500).json({ error: "The users information could not be retrieved." })
    })
})
//---------------------------------------------------------------------
//server get method will return user object with specific id's
server.get("/api/users/:id",(req,res)=>{
    const userId = req.params.id;
    db.findById(userId)
    .then(user=>{
        res.status(200).end()
    })
    .catch(err=>{
        res.status(404).json({ message: "The user with the specified ID does not exist." })
    })
})
//---------------------------------------------------------------------
//server post method creates a user using the information sent inside the request body

server.post("/api/users",(req,res)=>{
    const userPost = req.body;

    db.insert(userPost)
    .then()
    .catch()
})
//---------------------------------------------------------------------
server.listen(5000, ()=>{
    console.log('\n*** API running on port 5k ***\n');
})
