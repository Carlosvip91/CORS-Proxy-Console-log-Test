const fetch = require('node-fetch');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

//Running node src/server.js would result in seeing this information on localhost:3000
app.get("/", async (req, res) => {
    const response = await fetch("http://zelda-api.apius.cc/api/games")
    res.json(await response.json())
})


 app.listen(3000, () => console.log("Server is listening on port 3000"));

    
