import { MonumentStructure } from "./types";
import Monument from "./Monument";

const fanflins = new Monument(
  "Fanflins",
  "Monumento a Fanflins pintando el cielo de plata",
  "fanflins.jpeg",
  { city: "Badaran", country: "La Rioja" },
);

const torreDelOro = new Monument(
  "Torre del Oro",
  "Monumento a los trasnochaos",
  "torredeloro.jpeg",
  { city: "Barcelona", country: "España" },
);

export const monuments: MonumentStructure[] = [fanflins, torreDelOro];
