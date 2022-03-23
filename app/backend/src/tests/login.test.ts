import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';

chai.use(chaiHttp);

const { expect } = chai;

describe('Tests Login', () => {
  const user = {
    id: 1,
    username: 'wesley',
    role: 'admin',
    email: 'wesley@betrybe.com',
  };

  before(async () => {
    sinon
      .stub(User, 'create')
      .resolves(user as User);
  });

});