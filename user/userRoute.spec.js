const request = require("supertest");
const server = require("../api/server.js");
const jwt = require("jsonwebtoken");
const db = require("./userDb");

jest.mock("./userDb");

const token = jwt.sign(
  { username: "testUser", password: "testPasswrd" },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);

describe("/api/users", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe("GET /", () => {
    it("should get 200 status code", async () => {
      const expectedStatusCode = 200;
      const response = await request(server)
        .get("/api/users")
        .set("Authorization", token);

      expect(response.status).toEqual(expectedStatusCode);
      expect(response.status).not.toEqual(400);
    });

    it("should run db once", async () => {
      const response = await request(server)
        .get("/api/users")
        .set("Authorization", token);

      expect(db.find).toHaveBeenCalledTimes(1);
      expect(db.find).not.toHaveBeenCalledTimes(2);
    });
  });

  describe("GET /:id", () => {
    it("should get 200 status code", async () => {
      const id = 1;
      const expectedStatusCode = 200;
      const response = await request(server)
        .get(`/api/users/${id}`)
        .set("Authorization", token);

      expect(response.status).toEqual(expectedStatusCode);
      expect(response.status).not.toEqual(400);
    });

    it("should should run db once", async () => {
      const id = 1;
      const response = await request(server)
        .get(`/api/users/${id}`)
        .set("Authorization", token);

        expect(db.findById).toHaveBeenCalledTimes(1);
        expect(db.findById).not.toHaveBeenCalledTimes(2);
    });
  });

  describe("POST /", () => {
    it("should get 201 status code", async () => {
      const sendBody = { username: "dsafdfsa4", password: "password1" };
      const expectedStatusCode = 201;
      const response = await request(server)
        .post(`/api/users`)
        .send(sendBody)
        .set("Authorization", token);

      expect(response.status).toEqual(expectedStatusCode);
      expect(response.status).not.toEqual(500);
    });
  });

  describe("PUT /:id", () => {
    it("should get 201 status code", async () => {
      const id = 1;
      const sendBody = { username: "fasdf4", password: "password1" };
      const expectedStatusCode = 201;
      const response = await request(server)
        .put(`/api/users/${id}`)
        .set("Authorization", token)
        .send(sendBody);

      expect(response.status).toEqual(expectedStatusCode);
      expect(response.status).not.toEqual(500);
    });
  });

  describe("DELETE /:id", () => {
    it("should get 204 status code", async () => {
      const id = 1;
      const expectedStatusCode = 204;
      const response = await request(server)
        .del(`/api/users/${id}`)
        .set("Authorization", token);

      expect(response.status).toEqual(expectedStatusCode);
      expect(response.status).not.toEqual(500);
    });
  });

  describe("GET /:id/plants", () => {
    it("should get success status code", async () => {
      const id = 1;
      const expectedStatusCode = 200;
      const response = await request(server)
        .get(`/api/users/${id}/plants`)
        .set("Authorization", token);

      expect(response.status).toEqual(expectedStatusCode);
      expect(response.status).not.toEqual(500);
    });
  });

  describe("POST /:id/plants", () => {
    it("should get success status code", async () => {
      const id = 3;
      const expectedStatusCode = 201;
      const response = await request(server)
        .post(`/api/users/${id}/plants`)
        .send({ plantKey: "3", h2oFrequency: "1", nickName: "chang45e" })
        .set("Authorization", token);

      expect(response.status).toEqual(expectedStatusCode);
      expect(response.status).not.toEqual(500);
    });
  });

  describe("PUT /:id/plants", () => {
    it("should get success status code", async () => {
      const id = 1;
      const expectedStatusCode = 200;
      const response = await request(server)
        .put(`/api/users/${id}/plants`)
        .send({ plantKey: "1", h2oFrequency: "1", nickName: "chang45e" })
        .set("Authorization", token);

      expect(response.status).toEqual(expectedStatusCode);
      expect(response.status).not.toEqual(500);
    });
  });

  describe("DELETE /:id/plants", () => {
    it("should get success status code", async () => {
      const id = 1;
      const expectedStatusCode = 200;
      const response = await request(server)
        .delete(`/api/users/${id}/plants`)
        .set("Authorization", token);

      expect(response.status).toEqual(expectedStatusCode);
      expect(response.status).not.toEqual(500);
    });
  });
});
