// implement your API here
const express = require("express");

const server = express();

server.get('/', (req, res) => {
    res.send("IT WORKS");
  });
  


server.listen(5000, ()=>{
    console.log('\n*** API running on port 5k ***\n');
})
