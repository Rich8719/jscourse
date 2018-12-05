const request = require('supertest')
const makeServer = require('../server')
const makeDatabase = require('../db')

function seedData(db){
    //deletes everything so test starts with clean database
    db.dropCollection('searches')
    return db.models.Search.insertMany([
        {
            text: 'kittens',
            date: new Date()
        }
    ])
}

describe('server routes', () => {
    let server
    const db = makeDatabase('mongodb://localhost:27017/test')

    beforeAll(async () => {
        server = await makeServer(db)
        await seedData(db)
    })

    afterAll(async () => {
        await server.close()
    })


    describe('GET /', () => {
        test('should respond to index route and return data from database', () => {
            return request(server).get('/').then(response => {
                expect(response.status).toBe(200)
                expect(response.body.length).toBeGreaterThanOrEqual(0)
            })
        })
    })

    describe("GET /:search", () => {
        test('Should respond to search route and return data from API', () => {
            return request(server).get('/kittens').then(response => {
                expect(response.status).toBe(200)
                expect(response.body.length).toBeGreaterThanOrEqual(0)
            })
        })
    })

    describe('POST /', () => {
        test('should respond to POST route and return new database item', () => {
            return request(server)
                .post('/')
                .send({searchText: 'kittens'})
                .then(response => {
                    expect(response.status).toBe(200)
                    expect(response.body.text).toBe('kittens')
                })
        })
    })
})