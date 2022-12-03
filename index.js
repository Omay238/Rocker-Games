const path = require("path");
const express = require("express");
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(port, () => {
    console.log(`Listening on 127.0.0.1:${port}`);
});