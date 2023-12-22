const express = require("express");
const cors = require("cors");
const port = 3000;

var app = express();

const bearerToken = require('express-bearer-token');
//to use the bearer token middleware
app.use(bearerToken());

app.use(cors());
//to listen to the specified port
app.listen(port, () => {
    console.log(`Example app listening at https://reimagined-rotary-phone-g946gxj4qpjhjgq-3000.app.github.dev/:${port}`);
});

app.get("/tshirts", (req, res)=> {
    if(req.token !== "1234567890") {
        res.status(401).send("You ar not authorized to view this page");
    }
    res.send("here are the tshirts");
});

app.get("/hoodies", (req, res)=> {
    if(req.token !== "1234567890") {
        res.status(401).send("You are not authorized to view this page");
    }
    res.send("here are the hoodies");
});

app.get("/trousers", (req, res)=> {
    if(req.token !== "1234567890") {
        res.status(401).send("You are not authorized to view this page");
    }
    res.send("here are the trousers");
});

