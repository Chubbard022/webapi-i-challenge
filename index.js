// implement your API here
const express = require("express");
const db = require("./data/db")

const server = express();
server.use(express.json())

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
    .then(users=>{
        res.json(users)
    })
    .catch(err=>{
        res.status(404).json({ message: "The user with the specified ID does not exist." })
        res.status(500).json({ error: "The user information could not be retrieved." })
    })
})

//---------------------------------------------------------------------
//server post method creates a user using the information sent inside the request body
server.post("/api/users",(req,res)=>{
    const userPost = req.body;

    db.insert(userPost)
    .then(users=>{
        res.status(201).json(users)
    })
    .catch(err=>{
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    })
})
//---------------------------------------------------------------------
//server delete method removes the user with the specified id and returns the deleted user.
server.delete("/api/users/:id",(req,res)=>{
    const userId = req.params.id;
    db.remove(userId)
    .then(
        res.status(204).end()
    )
    .catch(err => {
        res.status(404).json({ message: "The user with the specified ID does not exist." })
        res.status(500).json({ error: "The user could not be removed" })
      });
})

//---------------------------------------------------------------------
//server update method updates the user from the request body. Returns the modified document.
server.put("/api/users/:id",(req,res)=>{
  

})
//---------------------------------------------------------------------
server.listen(5000, ()=>{
    console.log('\n*** API running on port 5k ***\n');
})
