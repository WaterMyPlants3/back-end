const request = require("supertest");
const server = require("./api/server.js");

describe("GET /", () => {
  it("should return an OK status code from the index route", async () => {
    const expectedStatusCode = 200;
  
    const response = await request(server).get("/");

    expect(response.status).toEqual(expectedStatusCode);
  });
});
