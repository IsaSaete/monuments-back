import Monument from "../Monument";
import { MonumentStructure } from "../types";

export const africanRenaissance = new Monument(
  "African Renaissance Monument",
  "A 50-metre high statue commemorating a political ideology that heralds the growth and prosperity of the African continent in the 21st century.",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Monument_renaissance.jpg/1920px-Monument_renaissance.jpg",
  { city: "Dakar", country: "Senegal" },
);

export const cadillacRanch = new Monument(
  "Cadillac Ranch",
  "Row of Cadillacs was buried underground.",
  "https://www.hostelworld.com/blog/wp-content/uploads/2018/09/Cadillac-Ranch-%E2%80%93-Texas-Estados-Unidos-1.jpg",
  { city: "Texas", country: "EEUU" },
);

export const fallenAngel = new Monument(
  "The Fallen Angel",
  "It is a fountain, representing the Fallen Angel being exiled from Paradise.",
  "https://www.hostelworld.com/blog/wp-content/uploads/2018/09/2377059515_80eb3d9677_o.jpg",
  { city: "Madrid", country: "Spain" },
);

export const lePouce = new Monument(
  "Le Pouce",
  "Is a monumental sculpture depicting the thumb of the renowned artist César Baldaccini. ",
  "https://www.hostelworld.com/blog/wp-content/uploads/2018/09/8029562381_5209ba466a_o-1400x788.jpg",
  { city: "Paris", country: "France" },
);

export const headingtonShark = new Monument(
  "The Headington Shark",
  "Is a rooftop sculpture. It was protest art, put up without permission, to be symbolic of bombs crashing into buildings.",
  "https://www.hostelworld.com/blog/wp-content/uploads/2018/09/3215385749_c03cf78ed2_o.jpg",
  { city: "Oxford", country: "England" },
);

export const angkorWat = new Monument(
  "Angkor Wat",
  "A temple dating back to the 1100s. It is the world's largest religious structure.",
  "https://panavision-tours.es/viajes/angkor-wat/angkor-wat.jpg",
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
