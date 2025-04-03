import express from "express";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFound";
import morgan from "morgan";
import checkHealthStatus from "./middlewares/checkHealthStatus";

const app = express();

app.use(morgan("dev"));

app.get("/", checkHealthStatus);

app.use(handleEndpointNotFound);

export default app;
