const request = require('supertest');
const app = require('../src/app');

describe('Auth API', () => {
  test('should respond to login', async () => {
    const res = await request(app).post('/api/auth/login').send({ email: 'test@example.com', password: '123456' });
    expect(res.statusCode).toBe(200);
  });
});
