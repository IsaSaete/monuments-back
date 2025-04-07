import { Request, Response } from "express";
import { MonumentsControllerStructure } from "./types";
import { MonumentStructure } from "../types";
import Monument from "../Monument";

class MonumentController implements MonumentsControllerStructure {
  constructor(private monuments: MonumentStructure[]) {}

  public getMonuments = (_req: Request, res: Response): void => {
    res.status(200).json({ monuments: this.monuments });
  };

  public addMonument = (req: Request, res: Response): void => {
    const monument = req.body as MonumentStructure;

    const newMonument: MonumentStructure = new Monument(
      monument.name,
      monument.description,
      monument.imageUrl,
      {
        city: monument.city,
        country: monument.country,
      },
    );

    const existMonument = this.monuments.some(
      (monument) => monument.name === newMonument.name,
    );

    if (existMonument) {
      res.status(409).json({ error: "This monument already exists" });
      return;
    }

    this.monuments.push(newMonument);

    res.status(201).json(newMonument);
  };
}

export default MonumentController;
