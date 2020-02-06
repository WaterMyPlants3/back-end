// const request = require("supertest");
// const server = require("../api/server.js");
// const db = require("../data/dbConfig.js");
// const body = [
//   {
//     username: "test1",
//     phoneNumber: "471-714-5247",
//     password: "password1"
//   },
//   {
//     username: "test2",
//     phoneNumber: "482-970-5826",
//     password: "password1"
//   },
//   {
//     username: "test3",
//     phoneNumber: "473-714-5247",
//     password: "password1"
//   }
// ];

// const plantsBody = [
//   { species: "Phytolacca americana" },
//   { species: "Galanthus" },
//   { species: "Betula nigra" },
//   { species: "Asclepias syriaca" },
//   { species: "Alnus glutinosa" },
//   { species: "Cirsium arvense" },
//   { species: "Pueraria lobata" },
//   { species: "Solanum dulcamara" },
//   { species: "Acer negundo" },
//   { species: "Allium caeruleum" }
// ];

// const usersPlantsBody = [
//   {
//     userKey: 1,
//     plantKey: 1,
//     nickName: "Creeping Garget",
//     h2oFrequency: 4,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqNm4iPPh6dmZZODTVks9ZsR6MxIe2-uHxnP7s95y76EzwmJ4o"
//   },
//   {
//     userKey: 2,
//     plantKey: 2,
//     nickName: "Sour Wintercress",
//     h2oFrequency: 2,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSx_b7zc9VQwatW1wUDtYYd8Mj4k4G71L5ITlIuhjqj_YtPaQPX"
//   }
// ];
// describe("/api/plants", () => {
//   beforeEach(async () => {
//     await db.seed.run();
//   });
//   describe("GET /", () => {
//     it("should get 200 status code", async () => {
//       const expectedStatusCode = 200;
//       const response = await request(server).get("/api/plants");

//       expect(response.status).toEqual(expectedStatusCode);
//       expect(response.status).not.toEqual(400);
//     });

//     it("should return JSON object", async () => {
//       const expectedBody = plantsBody;
//       const response = await request(server).get("/api/plants");

//       expect(response.body.length).toEqual(expectedBody.length);
//       expect(response.body).not.toEqual({ nodata: "nodata" });
//     });
//   });

//   describe("GET /:id", () => {
//     it("should get 200 status code", async () => {
//       const id = 1;
//       const expectedStatusCode = 200;
//       const response = await request(server).get(`/api/plants/${id}`);
//       expect(response.status).toEqual(expectedStatusCode);
//       expect(response.status).not.toEqual(400);
//     });

//     it("should return JSON object", async () => {
//       const id = 1;
//       const expectedBody = plantsBody;
//       const response = await request(server).get(`/api/plants/${id}`);

//       expect(response.body[0].species).toEqual(expectedBody[0].species);
//       expect(response.body[0]).not.toEqual({ nodata: "nodata" });
//     });
//   });

//   describe("POST /", () => {
//     it("should get 201 status code", async () => {
//       const sendBody = { species: "sadfsdfaf" };
//       const expectedStatusCode = 201;
//       const response = await request(server)
//         .post(`/api/plants`)
//         .send(sendBody);

//       expect(response.status).toEqual(expectedStatusCode);
//       expect(response.status).not.toEqual(500);
//     });
//   });

//   describe("PUT /:id", () => {
//     it("should get 401 status code", async () => {
//       const id = 1;
//       const sendBody = { species: "asfafds" };
//       const expectedStatusCode = 201;
//       const response = await request(server)
//         .put(`/api/plants/${id}`)
//         .send(sendBody);

//       expect(response.status).toEqual(expectedStatusCode);
//       expect(response.status).not.toEqual(500);
//     });
//   });

//     describe("DELETE /:id", () => {
//       it("should get 204 status code", async () => {
//         const id = 1;
//         const expectedStatusCode = 409;
//         const response = await request(server)
//           .del(`/api/plants/${id}`)

//         expect(response.status).toEqual(expectedStatusCode);
//         expect(response.status).not.toEqual(500);
//       });
//     });

//     describe("GET /:id/users", () => {
//       it("should get success status code", async () => {
//         const id = 1;
//         const expectedStatusCode = 200;
//         const response = await request(server)
//           .get(`/api/plants/${id}/users`)

//         expect(response.status).toEqual(expectedStatusCode);
//         expect(response.status).not.toEqual(500);
//       });
//     });

//     describe("POST /:id/users", () => {
//       it("should get success status code", async () => {
//         const id = 3;
//         const expectedStatusCode = 201;
//         const response = await request(server)
//           .post(`/api/plants/${id}/users`)
//           .send({ userKey: "3", h2oFrequency: "1", nickName: "chang45e" })

//         expect(response.status).toEqual(expectedStatusCode);
//         expect(response.status).not.toEqual(500);
//       });
//     });

//     describe("DELETE /:id/users", () => {
//       it("should get success status code", async () => {
//         const id = 1;
//         const expectedStatusCode = 200;
//         const response = await request(server)
//           .delete(`/api/plants/${id}/users`)

//         expect(response.status).toEqual(expectedStatusCode);
//         expect(response.status).not.toEqual(500);
//       });
//     });
// });
