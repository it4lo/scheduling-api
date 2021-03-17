const request = require('supertest')
const app = require('../../../src/ecma5');

test('#Should listen', () => {
    return request(app).get('/')
        .then((res) => {
            expect(res.status).toBe(200)
        })
})