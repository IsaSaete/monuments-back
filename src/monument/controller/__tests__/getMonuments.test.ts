import MonumentController from "../MonumentController";
import { monuments } from "../../fixtures";
import { Request, Response } from "express";

describe("Given a getMonuments function", () => {
  describe("When it receives a monuments request and a response", () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    const monumentController = new MonumentController(monuments);

    afterEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should call the received response's method status with 200", () => {
      const expectedStatus = 200;

      monumentController.getMonuments(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the received response's method json with a 'Fanflins' and 'Torre del oro' monuments", () => {
      const expectedMonuments = { monuments: monuments };

      monumentController.getMonuments(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMonuments);
    });
  });
});
