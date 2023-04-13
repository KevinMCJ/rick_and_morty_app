const express = require('express');
const server = express();
const routes = require("./routes/index");
const cors = require("cors");
const PORT = 3001;

// * Middlewares
server.use(cors());
server.use(express.json());
server.use("/rickandmorty", routes);

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

// * Server
server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});
