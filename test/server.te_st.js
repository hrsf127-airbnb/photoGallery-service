import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import request from 'supertest';

configure({ adapter: new Adapter() });

const server = require('../server/server.js');

describe('Server', () => {
  test('Tests server at the root path', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
  });
})