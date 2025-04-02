import { v4 as uuidv4 } from "uuid";
import { Location, MonumentStructure } from "./types";

class Monument implements MonumentStructure {
  id: string;
  country: string;
  city: string;

  constructor(
    public name: string,
    public description: string,
    public imageUrl: string,
    location: Location,
  ) {
    this.country = location.country;
    this.city = location.city;
    this.id = uuidv4();
  }
}

export default Monument;
