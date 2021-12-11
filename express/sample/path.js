const path = require("path");
const express = require("express");
const app = express();

const staticPath = path.join(__dirname, "../foodease");

app.use(express.static(staticPath));


app.get("/", (req, res) => {
    res.send("Hello to FoodEase");
});

app.listen(8000, () => {
    console.log("listening to the port 8000");
});