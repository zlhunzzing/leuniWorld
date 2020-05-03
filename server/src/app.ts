import express from "express";
import { createConnection } from "typeorm";
import * as bodyParser from "body-parser";
import cors from "cors";
import mainRouter from "./routes/main";

import http from "http";
import socketIo from "socket.io";

const PORT = 3000;
const app = express();

const server = http.createServer(app);
const io = socketIo(server);

createConnection()
  .then(async () => {
    app.use(bodyParser.json());
    app.use(
      cors({
        origin: ["http://localhost:4000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
      })
    );

    io.on("connection", (socket) => {
      console.log("a user connected");

      socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
      });

      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });

    app.get("/", (req, res) => {
      res.send("hello");
    });

    app.use("/main", mainRouter);

    server.listen(PORT, () => {
      // console.log(`Server listening on port ${PORT}`)
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
