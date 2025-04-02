import Monument from "../Monument";
import { MonumentStructure } from "../types";

export const renacimientoAfricano = new Monument(
  "Monumento al Renacimiento Africano",
  "Estatua de 50 metros de altura que conmemora una ideología política que anuncia el crecimiento y la prosperidad del continente africano en el siglo XXI.",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Monument_renaissance.jpg/1920px-Monument_renaissance.jpg",
  { city: "Dakar", country: "Senegal" },
);

export const cadillacRanch = new Monument(
  "Cadillac Ranch",
  "Hilera de Cadillacs fue enterrada bajo tierra.",
  "https://www.hostelworld.com/blog/wp-content/uploads/2018/09/Cadillac-Ranch-%E2%80%93-Texas-Estados-Unidos-1.jpg",
  { city: "Texas", country: "EEUU" },
);

export const angelCaido = new Monument(
  "Ángel Caído",
  "Ángel que ha sido expulsado del Cielo por rebelarse contra Dios.",
  "https://www.hostelworld.com/blog/wp-content/uploads/2018/09/2377059515_80eb3d9677_o.jpg",
  { city: "Madrid", country: "España" },
);

export const lePouce = new Monument(
  "Le Pouce",
  "Escultura en forma de pulgar que se encuentra",
  "https://www.hostelworld.com/blog/wp-content/uploads/2018/09/8029562381_5209ba466a_o-1400x788.jpg",
  { city: "Paris", country: "Francia" },
);

export const headingtonShark = new Monument(
  "The Headington Shark",
  "Tiburón incrustado en el tejado de una casa",
  "https://www.hostelworld.com/blog/wp-content/uploads/2018/09/3215385749_c03cf78ed2_o.jpg",
  { city: "Oxford", country: "Inglaterra" },
);

export const monuments: MonumentStructure[] = [
  renacimientoAfricano,
  cadillacRanch,
  angelCaido,
  lePouce,
  headingtonShark,
];
