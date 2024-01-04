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
const bodyParser = require('body-parser');
//////////////////////////// così non ha senso perchè dobbiamo fare due richieste al server, una per prendere i dati e una per prendere l'immagine
//quindi optiamo per postare le foto su imgur e prendere il link da lì
//const path = require('path');
//const fs = require('fs');
//const multer = require('multer');
////////////////////////////
const app = express()
const port = 3000;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cisco",
  database: "negozio"
});
//connects and creates a database correctly
//con.connect((err)=> { //connection to the database, takes a call back function as a parameter which is called when the connection is established
//    if (err) throw err;
//    console.log("Connected!");
//    con.query("CREATE DATABASE mydb",(err, result)=> { //executes a query on the database, takes a call back function as a parameter which is called when the query is executed
//      if (err) throw err;
//      console.log("Database created");
//    });
//});

app.use(cors())
app.use(bodyParser.json());




app.get("/tshirts", (req, res) => {
  console.log("Connected " + req.hostname)
  //res.json({ name: "tshirt", price: 9.99 });

  con.connect((err) => {
    if (err) throw err;
    con.query("SELECT * FROM tshirts", (err, result, fields) => {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
  });
});

app.get("/hoodies", (req, res) => {
  console.log("Connected " + req.hostname)
  //res.json({ name: "hoodie", price: 69.99 });

  con.connect((err) => {
    if (err) throw err;
    con.query("SELECT * FROM hoodies", (err, result, fields) => {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
  });
});

app.get("/trousers", (req, res) => {
  console.log("Connected " + req.hostname)
  //res.json({ name: "trousers", price: 99.99 });

  con.connect((err) => {
    if (err) throw err;
    con.query("SELECT * FROM trousers", (err, result, fields) => {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
  });
});

app.post('/addTshirt', (req, res) => {
  const {
    name_info,
    short_description,
    long_description,
    price,
    discount,
    size_info,
    sex,
    material,
    producer_phone,
  } = req.body;
  //per evitare sql injection, passiamo i valori come valori e non come codice sql perchè un hacker potrebbe cambiare i dati. 
  const sql = `
    INSERT INTO tshirts 
    (name_info, short_description, long_description, price, discount, size_info, sex, material, producer_phone)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) 
  `;//il ? è un placeholder per i valori che passiamo dopo come parametro

  const values = [
    name_info,
    short_description,
    long_description,
    price,
    discount,
    size_info,
    sex,
    material,
    producer_phone,
  ];
  con.connect((err) => {
    if (err) throw err;
    con.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error adding tshirt to the database:', err);
        res.status(500).json({ error: 'Internal Server Error' });//status 500 significa che c'è stato un errore sul server
        return;
      }
    });


    console.log('tshirt added to the database');
    res.status(201).json({ message: 'tshirt added successfully' });//status 201 significa che è stato creato con successo qualcosa sul server
  });
});

app.post('/addHoodies', (req, res) => {
  const {
    name_info,
    short_description,
    long_description,
    price,
    discount,
    size_info,
    sex,
    material,
    producer_phone,
  } = req.body;
  //per evitare sql injection, passiamo i valori come valori e non come codice sql perchè un hacker potrebbe cambiare i dati
  const sql = `
    INSERT INTO hoodies 
    (name_info, short_description, long_description, price, discount, size_info, sex, material, producer_phone)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) 
  `;//il ? è un placeholder per i valori che passiamo dopo come parametro

  const values = [
    name_info,
    short_description,
    long_description,
    price,
    discount,
    size_info,
    sex,
    material,
    producer_phone,
  ];

  con.connect((err) => {
    if (err) throw err;
    con.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error adding hoodie to the database:', err);
        res.status(500).json({ error: 'Internal Server Error' });//status 500 significa che c'è stato un errore sul server
        return;
      }
    });

    console.log('hoodie added to the database');
    res.status(201).json({ message: 'hoodie added successfully' });
  });
});

app.post('/addTrousers', (req, res) => {
  const {
    name_info,
    short_description,
    long_description,
    price,
    discount,
    size_info,
    sex,
    material,
    producer_phone,
  } = req.body;
  //per evitare sql injection, passiamo i valori come valori e non come codice sql perchè un hacker potrebbe cambiare i dati
  const sql = `
    INSERT INTO trousers 
    (name_info, short_description, long_description, price, discount, size_info, sex, material, producer_phone)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) 
  `;//il ? è un placeholder per i valori che passiamo dopo come parametro

  const values = [
    name_info,
    short_description,
    long_description,
    price,
    discount,
    size_info,
    sex,
    material,
    producer_phone,
  ];

  con.connect((err) => {
    if (err) throw err;
    con.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error adding trousers to the database:', err);
        res.status(500).json({ error: 'Internal Server Error' });//status 500 significa che c'è stato un errore sul server
        return;
      }
    });

    console.log('Trousers added to the database');
    res.status(201).json({ message: 'Trousers added successfully' });
  });
});

app.delete('/buyTshirt/:id', (req, res) => {
  const itemId = parseInt(req.params.id);

  // Find the index of the item in the array
  // If the item exists, remove it from the mysql table
  const sql = `DELETE FROM tshirts WHERE tshirt_id = ?`;
  const values = [itemId];

  con.connect((err) => {
    if (err) throw err;
    con.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error buying tshirt', err);
        res.status(500).json({ error: 'Internal Server Error' });//status 500 significa che c'è stato un errore sul server
        return;
      }
    });
  });
});

app.delete('/buyHoodie/:id', (req, res) => {
  const itemId = parseInt(req.params.id);

  // Find the index of the item in the array
  // If the item exists, remove it from the mysql table
  const sql = `DELETE FROM hoodies WHERE hoodies_id = ?`;
  const values = [itemId];

  con.connect((err) => {
    if (err) throw err;
    con.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error buying hoodie', err);
        res.status(500).json({ error: 'Internal Server Error' });//status 500 significa che c'è stato un errore sul server
        return;
      }
    });
  });
});

app.delete('/buyTrousers/:id', (req, res) => {
  const itemId = parseInt(req.params.id);

  // Find the index of the item in the array
  // If the item exists, remove it from the mysql table
  const sql = `DELETE FROM trousers WHERE trousers_id = ?`;
  const values = [itemId];

  con.connect((err) => {
    if (err) throw err;
    con.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error buying trousers', err);
        res.status(500).json({ error: 'Internal Server Error' });//status 500 significa che c'è stato un errore sul server
        return;
      }
    });
  });
});
//////////////////////////////
//const storage = multer.diskStorage({
//  destination: function (req, file, cb) {
//    cb(null, 'Images/Hoodies'); // Specify the destination folder for uploaded files
//  },
//  filename: function (req, file, cb) {
//    cb(null, file.originalname); // Keep the original filename
//  }
//});
//
//const upload = multer({ storage: storage });
//
//app.get('/downloadFile', (req, res) => {
//  const fileName = 'mokarooSettings.png'; // Specify the filename
//  const filePath = path.join(__dirname, 'uploads', fileName);
//
//  // Set the appropriate headers for the file download
//  res.setHeader('Content-Type', 'image/png'); // Adjust the content type based on your file type
//  res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
//
//  // Create a readable stream from the file and pipe it to the response
//  const fileStream = fs.createReadStream(filePath);
//  fileStream.pipe(res);
//
//  // Handle errors, if any
//  fileStream.on('error', (error) => {
//    console.error('Error reading file:', error);
//    res.status(500).send('Internal Server Error');
//  });
//});
//
//////////////////////////////
app.listen(port, () => {
  console.log("Example app listening at http://localhost:3000");
});