import * as chai from 'chai';
import chaiHttp = require('chai-http');
import * as shell from 'shelljs';

import { app } from '../app';

import generateToken from '../middlewares/GenerateToken';

chai.use(chaiHttp);

const { expect } = chai;

let httpResponse;

describe('Tests na rota /login', () => {

  const userMock = {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
  };

  before(async () => {
    shell.exec('npm run db:reset')
  });

  it('Requisição feita com sucesso', async () => {
    httpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'admin@admin.com',
        password: 'secret_admin',
      });

    const { user, token } = httpResponse.body;

    expect(httpResponse.status).to.be.equal(200);
    expect(user).to.be.eql(userMock);
    expect(token).to.be.a('string');
    expect(token).not.to.be.undefined;
  });

  it('Requisição feita com email incorreto', async () => {
    httpResponse = await chai
    .request(app)
    .post('/login')
    .send({
      email: 'xablau@admin.com',
      password: 'secret_admin',
    });

    const { message } = httpResponse.body;

    expect(httpResponse.status).to.be.equal(401);
    expect(message).to.be.equal('Incorrect email or password');
  })

  it('Requisição feita com senha incorreta', async () => {
    httpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'admin@admin.com',
        password: 'xablau',
      });

    const { message } = httpResponse.body;

    expect(httpResponse.status).to.be.equal(401);
    expect(message).to.be.equal('Incorrect email or password');
  });

  it('Requisição feita sem email', async () => {
    httpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        password: 'xablau',
      });

    const { message } = httpResponse.body;

    expect(httpResponse.status).to.be.equal(401);
    expect(message).to.be.equal('All fields must be filled');
  });

  it('Requisição feita sem senha', async () => {
    httpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'admin@admin.com',
      });

    const { message } = httpResponse.body;

    expect(httpResponse.status).to.be.equal(401);
    expect(message).to.be.equal('All fields must be filled');
  });
});

describe('Tests na rota /get', () => {
  const userMock = {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
  };

  const token = generateToken(userMock);

  it('Token válido na requisição', async () => {
    httpResponse = await chai
      .request(app)
      .get('/login/validate')
      .set('authorization', token);

    const response = httpResponse.body;
    expect(httpResponse.status).to.be.equal(200);
    expect(response).to.be.equal(userMock.role);
  });
});