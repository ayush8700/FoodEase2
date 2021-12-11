const express = require("express");
const app = express();
const port = 8000;


app.get("/", (req, res) => {
    res.send("Hello for the express server");
})

app.listen(port, () => {
    console.log('listening to the port ${port}')
})