import { Response, Request } from "express";
import handleEndpointNotFound from "./handleEndpointNotFound";

describe("Given the handleEndPointNotfound middleware", () => {
  describe("When it receives a response", () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis().mockClear(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    afterEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should call the received response's method status with 404", () => {
      const expectedStatus = 404;

      handleEndpointNotFound(req, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the received response's method json with a error message 'Endpoint not found'", () => {
      const expectedError = { error: "Endpoint not found" };

      handleEndpointNotFound(req, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedError);
    });
  });
});
