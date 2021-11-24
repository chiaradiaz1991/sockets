const express = require("express");
const cors = require("cors");
const { Socket } = require("engine.io");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    // io refiere a toda la información de sus sockets conectados
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server);

    this.paths = {};

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
    this.sockets();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Directorio Público - Client
    this.app.use(express.static("public"));
  }

  routes() {}

  // Sockets

  sockets() {
    this.io.on("connection", (socket) => {
      console.log("cliente conectado");
      socket.on("disconnect", () => {
        console.log("cliente desconectado");
      });
    });
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
