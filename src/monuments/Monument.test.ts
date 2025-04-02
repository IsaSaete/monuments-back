import Monument from "./Monument";

describe("Given a monument instance", () => {
  describe("When it is instanciated with 'La Alhambra'", () => {
    test("Then it should return a monument with name is 'La Alhambra'", () => {
      const expectedName = "La Alhambra";
      const alhambra = new Monument("La Alhambra", "", "", {
        city: "",
        country: "",
      });
      const actualName = alhambra.name;

      expect(actualName).toBe(expectedName);
    });

    test("It should then return a Monument with the description: 'La Alhambra de Granada es el monumento más visitado de España'", () => {
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

    test("It should then return a Monument with the image URL: 'https://es.wikipedia.org/wiki/Alhambra#/media/Archivo:Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg'", () => {
      const expectedImageUrl =
        "https://es.wikipedia.org/wiki/Alhambra#/media/Archivo:Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg";

      const alhambra = new Monument(
        "",
        "",
        "https://es.wikipedia.org/wiki/Alhambra#/media/Archivo:Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg",
        { city: "", country: "" },
      );
      const actualImageUrl = alhambra.imageUrl;

      expect(actualImageUrl).toBe(expectedImageUrl);
    });

    test("It should then return a Monument with the city: 'Granada'", () => {
      const expectedCity = "Granada";

      const alhambra = new Monument("", "", "", {
        city: "Granada",
        country: "",
      });
      const actualCity = alhambra.city;

      expect(actualCity).toBe(expectedCity);
    });

    test("It should then return a Monument with the country: 'España'", () => {
      const expectedCountry = "España";

      const alhambra = new Monument("", "", "", {
        city: "",
        country: "España",
      });
      const actualCountry = alhambra.country;

      expect(actualCountry).toBe(expectedCountry);
    });
  });
});
