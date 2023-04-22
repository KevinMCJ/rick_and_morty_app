const server = require("./app");
const PORT = 3001;
const { conn } = require('./DB_connection');

// * Server
server.listen(PORT, async () => {
  await conn.sync({force: false});
  console.log("Server raised in port: " + PORT);
});
