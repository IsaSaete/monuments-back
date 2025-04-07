import express from "express";
import cors from "cors";
import morgan from "morgan";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFound";
import checkHealthStatus from "./middlewares/checkHealthStatus";
import monumentRouter from "../monument/router/monumentRouter";

const app = express();

app.use(morgan("dev"));

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(express.json());

app.get("/", checkHealthStatus);

app.use("/monuments", monumentRouter);

app.use(handleEndpointNotFound);

export default app;
