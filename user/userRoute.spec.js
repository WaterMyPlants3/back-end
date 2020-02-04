const request = require("supertest");
const server = require("../api/server.js");

router.get("/", async (req, res) => {
    try {
      const users = await userDb.find();
      res.status(200).json(users);
    } catch {
      next(err);
    }
  });
  
describe("/api/users", () => {
  it("GET /", async () => {
    const expectedStatusCode = 200;

    // do a get request to our api (server.js) and inspect the response
    const response = await request(server).get("/");

    expect(response.status).toEqual(expectedStatusCode);

    // same test using promise .then() instead of async/await
    // let response;
    // return request(server).get('/').then(res => {
    //   response = res;

    //   expect(response.status).toEqual(expectedStatusCode);
    // })
  });
});
