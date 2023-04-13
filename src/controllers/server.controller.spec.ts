import { app } from "@src/server";
import supertest from "supertest";

describe("Beach forecast functional tests", () => {
  it("should return a forecast with just a few times", async () => {
    const { body, status } = await supertest(app).get("");
    console.log(body);
    console.log(status);
    expect(status).toBe(200);
    expect(body).toEqual("Hello World");
  });
});
