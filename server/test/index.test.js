const app = require("../src/app");
const session = require("supertest");
const agent = session(app);
let myFavorites = require("../src/utils/myFavorites");

afterEach(() => {
  myFavorites.length = 0; 
})

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Reponde con status 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/rickandmorty/character/4");
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("species");
      expect(response.body).toHaveProperty("gender");
      expect(response.body).toHaveProperty("status");
      expect(response.body).toHaveProperty("origin");
      expect(response.body).toHaveProperty("image");
    });

    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/-53").expect(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("Debería responder con access: true al enviar credenciales válidas", async () => {
      const users = require("../src/utils/users"); // Es un array de usuarios.
      const { email, password } = users[0];
      const response = await agent
        .get("/rickandmorty/login")
        .query({ email, password });
      expect(response.body).toHaveProperty("access", true);
    });

    it("Debería responder con access: false al enviar credenciales inválidas", async () => {
      const response = await agent
        .get("/rickandmorty/login")
        .query({ email: "invalido@example.com", password: "invalido43124" });
      expect(response.body).toHaveProperty("access", false);
    });
  });

  describe("POST /rickandmorty/fav", () => {
    it("Debería devolver la informacion enviada en un arreglo", async () => {
      const objeto = { id: 1, name: "Kevin El Loco", status: "Alive" };
      const response = await agent.post("/rickandmorty/fav").send(objeto);
      expect(response.status).toBe(200);
      expect(myFavorites).toEqual([objeto]);
    });

    it("Debería devolver un arreglo que incluye los elementos enviados previamente", async () => {
      const objeto = { id: 1, name: "Kevin El Programador", status: "Dead" };
      const otroObjeto = { id: 2, name: "Morty Smith", status: "Alive" };

      // Enviar el primer objeto.
      let response = await agent.post("/rickandmorty/fav").send(objeto);
      expect(response.status).toBe(200);
      expect(myFavorites).toEqual([objeto]);

      // Envia el segundo objeto.
      response = await agent.post("/rickandmorty/fav").send(otroObjeto);
      expect(response.status).toBe(200);
      expect(myFavorites).toEqual([objeto, otroObjeto]);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si se envia un ID invalido, el arreglo myFavorites no debe cambiar", async() => {
      //Primero cuando no haya nada.
      let response = await agent.delete("/rickandmorty/fav/dasdas");
      expect(response.status).toBe(400);
      expect(myFavorites).toEqual([]);

      //Cuando exista un personaje, tampoco tiene que cambiar nada.
      const objTest = { id: 1, name: "Rick Endemoniado", status: "Dead" }
      await agent.post("/rickandmorty/fav").send(objTest);

      response = await agent.delete("/rickandmorty/fav/-43l");
      expect(response.status).toBe(400);
      expect(myFavorites).toEqual([objTest]);
    })

    it("Si se envia un ID válido, el personaje sera eliminado de myFavorites", async () => {
      const objeto = { id: 1, name: "Kevin El Cansado", status: "Dead" };
      const otroObjeto = { id: 2, name: "Morty Prueba", status: "Alive" };
      const ultimoObjeto = { id : 3, name: "Test obj", status: "Alive"};

      await agent.post("/rickandmorty/fav").send(objeto);
      await agent.post("/rickandmorty/fav").send(otroObjeto);
      await agent.post("/rickandmorty/fav").send(ultimoObjeto);

      // Eliminando el personaje del medio.
      const response = await agent.delete("/rickandmorty/fav/2");
      expect(response.status).toBe(200);
      expect(response.body.myFavorites).toEqual([objeto, ultimoObjeto]);
    })
  });
});