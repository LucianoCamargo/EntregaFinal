const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser'); 
const { Client } = require('pg');
if (process.env.ENV !== "production") {
  require("dotenv").config();
}
const { resolve } = require('path');
const { config } = require('dotenv');
config({ path: resolve(__dirname, "./.env") });

config({ path: resolve(__dirname, "./.env") });

app.get('/ping')

app.use(bodyParser.urlencoded({
    extended: true
}));



app.use(bodyParser.json());

const authRouter = require("./routes/auth");
const { router: tareasRouter } = require("./routes/login");

//setting


app.get("/login", (request, response) => {
    const client = new Client();
    client.connect();
  
    client.query("SELECT $1::text as message", ["Hola Mundo!"], (err, res) => {
      if (err) {
        console.error(err.stack);
        response.send("Error: " + err.stack);
      } else {
        console.log(res.rows[0].message);
        response.send(res.rows[0].message);
      }
      client.end();
    });
  });

  app.get("/header", async (request, response) => {
    const client = new Client();
    client.connect();
  
    client.query("SELECT $1::text as message", ["Hola Mundo!"], (err, res) => {
      if (err) {
        console.error(err.stack);
        response.send("Error: " + err.stack);
      } else {
        console.log(res.rows[0].message);
        response.send(res.rows[0].message);
      }
      client.end();
    });
  });
  
  app.get("/calculadora", async (request, response) => {
    const client = new Client();
    client.connect();
  
    client.query("SELECT $1::text as message", ["Hola Mundo!"], (err, res) => {
      if (err) {
        console.error(err.stack);
        response.send("Error: " + err.stack);
      } else {
        console.log(res.rows[0].message);
        response.send(res.rows[0].message);
      }
      client.end();
    });
  });

  
//routes
app.use(rutas);



///listening the server
app.listen(PORT, () => {
    console.log(`Escuchando el puerto http://localhost:${PORT}`)
  });