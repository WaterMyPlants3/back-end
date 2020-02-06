const request = require("supertest");
const server = require("../api/server.js");
const db = require("./plantDb");

jest.mock("./plantDb.js");
describe("/api/plants", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe("GET /", () => {
    it("should get 200 status code", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get("/api/plants");

      expect(response.status).toEqual(expectedStatusCode);
      expect(response.status).not.toEqual(400);
    });
  });

  describe("GET /:id", () => {
    it("should get 200 status code", async () => {
      const id = 1;
      const expectedStatusCode = 200;
      const response = await request(server).get(`/api/plants/${id}`);
      expect(response.status).toEqual(expectedStatusCode);
      expect(response.status).not.toEqual(400);
    });
  });

  describe("POST /", () => {
    it("should get 201 status code", async () => {
      const sendBody = { species: "sadfsdfaf" };
      const expectedStatusCode = 201;
      const response = await request(server)
        .post(`/api/plants`)
        .send(sendBody);

      expect(response.status).toEqual(expectedStatusCode);
      expect(response.status).not.toEqual(500);
    });
  });

  describe("PUT /:id", () => {
    it("should get 401 status code", async () => {
      const id = 1;
      const sendBody = { species: "asfafds" };
      const expectedStatusCode = 201;
      const response = await request(server)
        .put(`/api/plants/${id}`)
        .send(sendBody);

      expect(response.status).toEqual(expectedStatusCode);
      expect(response.status).not.toEqual(500);
    });
  });

  describe("DELETE /:id", () => {
    it("should get 204 status code", async () => {
      const id = 1;
      const expectedStatusCode = 204;
      const response = await request(server).del(`/api/plants/${id}`);

      expect(response.status).toEqual(expectedStatusCode);
      expect(response.status).not.toEqual(500);
    });
  });

  describe("GET /:id/users", () => {
    it("should get success status code", async () => {
      const id = 1;
      const expectedStatusCode = 200;
      const response = await request(server).get(`/api/plants/${id}/users`);

      expect(response.status).toEqual(expectedStatusCode);
      expect(response.status).not.toEqual(500);
    });
  });

  describe("POST /:id/users", () => {
    it("should get success status code", async () => {
      const id = 3;
      const expectedStatusCode = 201;
      const response = await request(server)
        .post(`/api/plants/${id}/users`)
        .send({ userKey: "3", h2oFrequency: "1", nickName: "chang45e" });

      expect(response.status).toEqual(expectedStatusCode);
      expect(response.status).not.toEqual(500);
    });
  });

  describe("DELETE /:id/users", () => {
    it("should get success status code", async () => {
      const id = 1;
      const expectedStatusCode = 200;
      const response = await request(server).delete(`/api/plants/${id}/users`);

      expect(response.status).toEqual(expectedStatusCode);
      expect(response.status).not.toEqual(500);
    });
  });
});
