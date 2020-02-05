const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig.js");
const jwt = require("jsonwebtoken");
const body = [
  {
    id: 1,
    username: "test1",
    phoneNumber: "471-714-5247",
    password: "password1"
  },
  {
    id: 2,
    username: "test2",
    phoneNumber: "482-970-5826",
    password: "password1"
  }
];

const token = jwt.sign(
  { username: "testUser", password: "testPasswrd" },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);

describe("/api/users", () => {
  beforeEach(async () => {
    await db("users").truncate();
    await db("users").insert(body);
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

    it("should return JSON object", async () => {
      const expectedBody = body;
      const response = await request(server)
        .get("/api/users")
        .set("Authorization", token);

      expect(response.body).toEqual(expectedBody);
      expect(response.body).not.toEqual({ nodata: "nodata" });
    });
  });
});
