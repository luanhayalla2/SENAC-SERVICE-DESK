const request = require('supertest');
const app = require('../src/app');

describe('Ticket API', () => {
  test('should create a ticket', async () => {
    const res = await request(app).post('/api/tickets').send({ title: 'Test', description: 'Desc' });
    expect([200,201]).toContain(res.statusCode);
  });
});
