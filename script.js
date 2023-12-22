const express = require('express');
//const cors = require('cors');
const app = express();
const port = 3000;
/*
il server non andava perchè codespace probabilmente redirecta le richieste, sminchiando gli header. In queso modo, qualunque cosa provassi, l'header Access-Control-Allow-Origin era sempre vuoto.
per farlo funzionare ho usato un servizio esterno di nome ngrok per mettere online il server senza passare da codespace. poi possiamo comunque fare la richiesta da codespace, perchè ngrok ci fornisce un url che rimanda al nostro server.
usando ngrok quindi dobbiamo usare cors per permettere al nostro server di accettare richieste da un altro dominio (in questo caso ngrok.io)
*/
app.head("/tshirts",  (req, res) => {
    console.info("HEAD /simple-cors");
    res.sendStatus(204);
});
app.get("/tshirts", (req, res) => {
    console.info("GET /simple-cors");
    res.json({
        name: "tshirt", price: 9.99
    });
});
app.post("/tshirts", (req, res) => {
    console.info("POST /simple-cors");
    res.json({
        text: "Simple CORS requests are working. [POST]"
    });
});

//const bearerToken = require('express-bearer-token');
//to use the bearer token middleware
//app.use(bearerToken());
//to listen to the specified port
// Enable CORS for all routes
//app.use( cors({origin: 'https://zany-orbit-44j6xq5j7xjfjp79-5502.app.github.dev'}) );
//
////app.options("*", cors());
//
//app.get("/tshirts", (req, res)=> {
//    //if(req.token !== "1234567890") {
//    //    res.status(401).send("You ar not authorized to view this page");
//    //}
//    res.json({name: "tshirt", price: 9.99});
//});
//
//app.get("/hoodies", (req, res)=> {
//    //if(req.token !== "1234567890") {
//    //    res.status(401).send("You are not authorized to view this page");
//    //}
//    res.send("here are the hoodies");
//});
//
//app.get("/trousers", (req, res)=> {
//    //if(req.token !== "1234567890") {
//    //    res.status(401).send("You are not authorized to view this page");
//    //}
//    res.send("here are the trousers");
//});

app.listen(port, () => {
    console.log(`Example app listening at https://reimagined-rotary-phone-g946gxj4qpjhjgq-3000.app.github.dev/:${port}`);
});