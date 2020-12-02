
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello");
})

app.get("/post", (req, res) => {
    res.send("Hello, we are on post");
})

app.listen(4000)

