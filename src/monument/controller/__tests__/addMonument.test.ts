import { monuments, laBarranca, fanflins } from "../../fixtures";
import Monument from "../../Monument";
import MonumentController from "../MonumentController";
import { Request, Response } from "express";

describe("Given a addMonument function", () => {
  describe("When it receives a request and response with La Barranca monument data", () => {
    const req = {
      body: laBarranca,
    } as Pick<Request, "body">;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    let copyMonuments: Monument[];

    beforeEach(() => {
      jest.clearAllMocks();
      copyMonuments = [...monuments];
    });

    test("Then it should call the received response`s method status with 201", () => {
      const expectedStatus = 201;

      const monumentController = new MonumentController(copyMonuments);

      monumentController.addMonument(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the received response`s method json with a monument named 'La Barranca", () => {
      const expectedNewMonument = laBarranca;

      const monumentController = new MonumentController(copyMonuments);

      monumentController.addMonument(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          name: expectedNewMonument.name,
          description: expectedNewMonument.description,
          imageUrl: expectedNewMonument.imageUrl,
          city: expectedNewMonument.city,
          country: expectedNewMonument.country,
        }),
      );
    });
    test("Then you should call the status of the received response method status with 409 if the monument already exists.", () => {
      const expectedStatus = 409;

      const req = {
        body: fanflins,
      } as Pick<Request, "body">;

      const monumentController = new MonumentController(copyMonuments);

      monumentController.addMonument(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });
  });
});
