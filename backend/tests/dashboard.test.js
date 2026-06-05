// dashboard.test.js – placeholder
const request = require('supertest');
const { server } = require('../src/server');

describe('Dashboard Routes', () => {
  it('should respond with 200 for GET /dashboard', async () => {
    const res = await request(server).get('/dashboard');
    expect(res.statusCode).toBe(200);
  });
});
