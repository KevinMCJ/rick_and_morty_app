const server = require("./app");
const PORT = 3001;
const { conn } = require('./DB_connection');
const { createSuperUser } = require("./helpers");

// * Server
server.listen(PORT, async () => {
  await conn.sync({force: false});
  await createSuperUser();
  console.log("Server raised in port: " + PORT);
});
