import express from "express";
import cors from "cors";
import morgan from "morgan";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFound";
import checkHealthStatus from "./middlewares/checkHealthStatus";
import monumentRouter from "../monument/router/monumentRouter";

const app = express();

app.use(morgan("dev"));

const origins = [
  "https://https://monumentisa.netlify.app/",
  "http://localhost:5173/",
];

app.use(
  cors({
    origin: origins,
    credentials: true,
  }),
);

app.get("/", checkHealthStatus);

app.use("/monuments", monumentRouter);

app.use(handleEndpointNotFound);

export default app;
