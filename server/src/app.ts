import * as express from "express";
import { createConnection, getRepository } from "typeorm";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import mainRouter from "./routes/main";

const PORT = 4000;
const app = express();

createConnection()
  .then(async () => {
    app.use(bodyParser.json());
    app.use(
      cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
      })
    );

    app.get("/", (req, res) => {
      res.send("hello");
    });

    app.use("/main", mainRouter);

    app.listen(PORT, () => {
      // console.log(`Server listening on port ${PORT}`)
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
