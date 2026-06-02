// report.test.js – placeholder
const request = require('supertest');
const { server } = require('../src/server');

describe('Report Routes', () => {
  it('should respond with 200 for GET /reports', async () => {
    const res = await request(server).get('/reports');
    expect(res.statusCode).toBe(200);
  });
});
