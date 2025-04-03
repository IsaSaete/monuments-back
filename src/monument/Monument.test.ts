import Monument from "./Monument";

describe("Given a monument instance", () => {
  describe("When it is instanciated with 'La Alhambra'", () => {
    test("Then it should have a name 'La Alhambra'", () => {
      const expectedName = "La Alhambra";
      const alhambra = new Monument("La Alhambra", "", "", {
        city: "",
        country: "",
      });
      const actualName = alhambra.name;

      expect(actualName).toBe(expectedName);
    });

    test("It should then have a description: 'La Alhambra de Granada es el monumento más visitado de España'", () => {
      const expectedDescription =
        "La Alhambra de Granada es el monumento más visitado de España";

      const alhambra = new Monument(
        "",
        "La Alhambra de Granada es el monumento más visitado de España",
        "",
        { city: "", country: "" },
      );
      const actualDescription = alhambra.description;

      expect(actualDescription).toBe(expectedDescription);
    });

    test("It should then have a Locations with city and country: 'Granada, España'", () => {
      const expectedCity = "Granada, España";

      const alhambra = new Monument("", "", "", {
        city: "Granada",
        country: "España",
      });
      const actualLocation = alhambra.city + ", " + alhambra.country;

      expect(actualLocation).toBe(expectedCity);
    });
  });
});
