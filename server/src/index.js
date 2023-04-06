const http = require("http");
const PORT = 3001;
const data = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("/rickandmorty/character")) {
      //Con esto dividimos la url donde viene el id en strings y agarramos el ultimo que es el que contiene el ID
      const id = req.url.split("/").at(-1);
      const character = data.find((char) => char.id == id);

      if (character) {
        res.writeHead(200, { "Content-type": "application/json" });
        return res.end(JSON.stringify(character));
      }

      res.writeHead(404, { "Content-type": "text/plain" });
      return res.end("Character not found");
    }
  })
  .listen(PORT, "localhost");
