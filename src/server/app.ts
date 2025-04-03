import express from "express";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFound";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.use(handleEndpointNotFound);

export default app;
