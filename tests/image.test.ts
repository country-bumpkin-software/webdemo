let image = require('../../samples/image-00000.dcm') 
const request = require("supertest");
var fs = require('fs');
let exec = require('child_process')
const { spawn } = require('child_process');
// let cleanup = require('./cleanup.sh')

// const baseUrl = "http://localhost:8000/v1";
jest.setTimeout(30000);

describe("this is the integration tests for the image files", () => {
    it("should add a new image with a tag", async () => {
        // act
        const postResponse = await request("http://127.0.0.1:8000/v1")
            .post("/upload")
            .send({
                "filename": "image-0000.dcm",
                "image_data": image,
                "tags": ["foo", "bar"]
            })
            .attach("image_data", image)
            .set("content-type", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            
            const wanted = {
                id: 1,
                created_by: 'user-id',
                created_timestamp: expect.any(Number),
                filename: 'image-0000.dcm',
                size: 0,
                tags: [ { id: 1, name: 'foo' }, { id: 2, name: 'bar' } ],
                uploaded_timestamp: expect.any(Number),
                url: expect.any(String)
              }
            expect(postResponse.body).toMatchObject(wanted)

    })
    it("should return a valid list of tags",  async () => {
         const result = await request("http://127.0.0.1:8000/v1")
            .get("/tags")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200);
        const wanted =    [ { id: 2, name: 'bar' }, { id: 1, name: 'foo' } ]
       
        expect(result.body.results).toMatchObject(wanted)
    })
})