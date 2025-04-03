import express from "express";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFound";
import morgan from "morgan";
import checkHealthStatus from "./middlewares/checkHealthStatus";
import monumentRouter from "../monument/router/monumentRouter";

const app = express();

app.use(morgan("dev"));

app.get("/", checkHealthStatus);

app.use("/monuments", monumentRouter);

app.use(handleEndpointNotFound);

export default app;
