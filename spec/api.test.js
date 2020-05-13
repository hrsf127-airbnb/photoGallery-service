const request = require('supertest');
const app = require('../server/app');

describe('API Test', () => {
  test('GET /photoGallery', async () => {
    const response = await request(app).get('/photoGallery');
    expect(response.statusCode).toBe(200);
    const listingObj = response.body[0];
    expect(listingObj).toHaveProperty('listingId');
    expect(listingObj).toHaveProperty('imageUrl');
    expect(listingObj).toHaveProperty('caption');
    expect(listingObj).toHaveProperty('verified');
  });
});
