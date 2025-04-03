import { Router } from "express";
import MonumentController from "../controller/MonumentController";
import { monuments } from "../data/monuments";

const monumentRouter = Router();

const monumentsController = new MonumentController(monuments);

monumentRouter.get("/", monumentsController.getMonuments);

export default monumentRouter;
