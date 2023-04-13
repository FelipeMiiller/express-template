import dotenv from "dotenv";
import cors from "cors";
import express from "express";

import { routes } from "./routes";

export const app = express();

async function bootstrap() {
  const port = process.env.PORT || 3333;

  dotenv.config();

  app.use(cors());
  app.use(express.json());
  app.use(routes);

  // await Setups();

  app.listen(port, () => {
    console.log(`Server started on port:${port}`);
  });
}
bootstrap();
