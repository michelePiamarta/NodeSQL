
//connettersi a sql da terminale: sudo mysql -u root -p
//password: cisco
const express = require("express")
const mysql = require('mysql2'); //serve per collegare fra loro il server node e il database mysql, scaricato con npm install mysql2
const cors = require("cors")
const bodyParser = require('body-parser');

const app = express()
const port = 3000;

app.use(cors())
app.use(bodyParser.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cisco",
  database: "negozio"
});

app.get("/all", (req, res) => {
  console.log("Connected " + req.hostname)
  //res.json({ name: "tshirt", price: 9.99 });
  con.connect((err) => {
    if (err) throw err;
    con.query("SELECT * FROM product;", (err, result, fields) => {
      if (err) throw err;
      //console.log(result);
      res.json(result);
    });
  });
});
//prendo un parametro dalla url in modo da non dover creare tre metodi uguali per ogni tipo di prodotto
app.get("/:product_type", (req, res) => {
  console.log("Connected " + req.hostname)
  const product_type = req.params.product_type;

  con.connect((err) => {
    if (err) throw err;
    con.query(`SELECT * FROM product WHERE product_type = '${product_type}'`, (err, result, fields) => {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
  });
});

app.post('/add', (req, res) => {
  const {
    product_type,
    image_path,
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
    INSERT INTO product 
    (product_type, image_path, name_info, short_description, long_description, price, discount, size_info, sex, material, producer_phone)
    VALUES (?,?,?, ?, ?, ?, ?, ?, ?, ?, ?) 
  `;//il ? è un placeholder per i valori che passiamo dopo come parametro

  const values = [
    product_type,
    image_path,
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
        console.error('Error adding product to the database:', err);
        res.status(500).json({ error: 'Internal Server Error' });//status 500 significa che c'è stato un errore sul server
        return;
      }
    });


    console.log('product added to the database');
    res.status(201).json({ message: 'product added successfully' });//status 201 significa che è stato creato con successo qualcosa sul server
  });
});

app.delete('/buy/:id', (req, res) => {
  const id = req.params.id;
  
  // Find the index of the item in the array
  // If the item exists, remove it from the mysql table
  const sql = `DELETE FROM product WHERE product_id = ?`;
  const values = [id];

  con.connect((err) => {
    if (err) throw err;
    con.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error buying', err);
        res.status(500).json({ error: 'Internal Server Error' });//status 500 significa che c'è stato un errore sul server
        return;
      }
    });
  });
});

app.listen(port, () => {
  console.log("app listening at http://localhost:3000");
});