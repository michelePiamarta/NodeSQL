//const express = require('express');
////const cors = require('cors');
//const app = express();
//const port = 3000;
///*
//il server non andava perchè codespace probabilmente redirecta le richieste, sminchiando gli header. In queso modo, qualunque cosa provassi, l'header Access-Control-Allow-Origin era sempre vuoto.
//per farlo funzionare ho usato un servizio esterno di nome ngrok per mettere online il server senza passare da codespace. poi possiamo comunque fare la richiesta da codespace, perchè ngrok ci fornisce un url che rimanda al nostro server.
//usando ngrok quindi dobbiamo usare cors per permettere al nostro server di accettare richieste da un altro dominio (in questo caso ngrok.io)
//*/
//app.head("/tshirts",  (req, res) => {
//    console.info("HEAD /simple-cors");
//    res.sendStatus(204);
//});
//app.get("/tshirts", (req, res) => {
//    console.info("GET /simple-cors");
//    res.json({
//        name: "tshirt", price: 9.99
//    });
//});
//app.post("/tshirts", (req, res) => {
//    console.info("POST /simple-cors");
//    res.json({
//        text: "Simple CORS requests are working. [POST]"
//    });
//});
//
////const bearerToken = require('express-bearer-token');
////to use the bearer token middleware
////app.use(bearerToken());
////to listen to the specified port
//// Enable CORS for all routes
////app.use( cors({origin: 'https://zany-orbit-44j6xq5j7xjfjp79-5502.app.github.dev'}) );
////
//////app.options("*", cors());
////
////app.get("/tshirts", (req, res)=> {
////    //if(req.token !== "1234567890") {
////    //    res.status(401).send("You ar not authorized to view this page");
////    //}
////    res.json({name: "tshirt", price: 9.99});
////});
////
////app.get("/hoodies", (req, res)=> {
////    //if(req.token !== "1234567890") {
////    //    res.status(401).send("You are not authorized to view this page");
////    //}
////    res.send("here are the hoodies");
////});
////
////app.get("/trousers", (req, res)=> {
////    //if(req.token !== "1234567890") {
////    //    res.status(401).send("You are not authorized to view this page");
////    //}
////    res.send("here are the trousers");
////});
//
//app.listen(port, () => {
//    console.log(`Example app listening at https://reimagined-rotary-phone-g946gxj4qpjhjgq-3000.app.github.dev/:${port}`);
//});
//

//connettersi a sql da terminale: sudo mysql -u root -p
//password: cisco
const express = require("express") 
const mysql = require('mysql2'); //serve per collegare fra loro il server node e il database mysql, scaricato con npm install mysql2
const cors = require("cors")
const app = express()
const port = 3000;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cisco"
});
//connects and creates a database correctly
con.connect((err)=> { //connection to the database, takes a call back function as a parameter which is called when the connection is established
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb",(err, result)=> { //executes a query on the database, takes a call back function as a parameter which is called when the query is executed
      if (err) throw err;
      console.log("Database created");
    });
});

app.use(cors())

app.get("/tshirt", (req, res) => {
    console.log("Connected " + req.hostname)
    res.json({ name: "tshirt", price: 9.99 });
});

app.get("/hoodies", (req, res) => {
    console.log("Connected " + req.hostname)
    res.json({ name: "hoodie", price: 69.99 });
});

app.get("/trousers", (req, res) => {
    console.log("Connected " + req.hostname)
    res.json({ name: "trousers", price: 99.99 });
});

app.listen(port, () => {
    console.log("Example app listening at http://localhost:3000");
});