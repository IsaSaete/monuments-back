import { Request, Response } from "express";
import { MonumentsControllerStructure } from "./types";
import { MonumentStructure } from "../types";

class MonumentController implements MonumentsControllerStructure {
  constructor(private monuments: MonumentStructure[]) {}

  public getMonuments = (_req: Request, res: Response): void => {
    res.status(200).json({ monuments: this.monuments });
  };
}

export default MonumentController;
