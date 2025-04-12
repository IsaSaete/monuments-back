import Monument from "../Monument";
import { MonumentStructure } from "../types";

export const africanRenaissance = new Monument(
  "African Renaissance Monument",
  "A 50-metre high statue commemorating a political ideology that heralds the growth and prosperity of the African continent in the 21st century.",
  "https://i.imgur.com/zNm55HF.png",
  { city: "Dakar", country: "Senegal" },
);

export const cadillacRanch = new Monument(
  "Cadillac Ranch",
  "The installation consists of a row of 10 Cadillacs buried nose first in the ground. Tthe cars are tilted at the same angle as the pyramids of Giza",
  "https://i.imgur.com/Dzr7Vnf.png",
  { city: "Texas", country: "EEUU" },
);

export const fallenAngel = new Monument(
  "The Fallen Angel",
  "It is a fountain, representing the Fallen Angel being exiled from Paradise. Inspired by verses from Paradise Lost of John Milton",
  "https://i.imgur.com/jEzN7iE.png",
  { city: "Madrid", country: "Spain" },
);

export const lePouce = new Monument(
  "Le Pouce",
  "Is a monumental sculpture depicting the thumb of the renowned artist César Baldaccini. The thumb symbolises human superiority",
  "https://i.imgur.com/CBI6iGA.png",
  { city: "Paris", country: "France" },
);

export const headingtonShark = new Monument(
  "The Headington Shark",
  "Is a rooftop sculpture. It was protest art, put up without permission, to be symbolic of bombs crashing into buildings",
  "https://i.imgur.com/JLrFJLM.png",
  { city: "Oxford", country: "England" },
);

export const angkorWat = new Monument(
  "Angkor Wat",
  "A temple dating back to the 1100s. It is the world's largest religious structure. It's a symbol of Cambodia and appears on its national flag",
  "https://i.imgur.com/yX27VBz.png",
  { city: "Siem Riep", country: "Cambodia" },
);

export const monuments: MonumentStructure[] = [
  africanRenaissance,
  cadillacRanch,
  fallenAngel,
  lePouce,
  headingtonShark,
  angkorWat,
];
