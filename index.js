const path = require("path");
const nunjucks = require("nunjucks");
const express = require("express");
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "static")));
nunjucks.configure("views", {
    autoescape: true,
    express: app
});

app.get("/", (req, res) => {
    res.render("index.njk");
});

app.listen(port, () => {
    console.log(`Listening on 127.0.0.1:${port}`);
});