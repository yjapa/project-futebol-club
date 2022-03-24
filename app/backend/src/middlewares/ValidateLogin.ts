import { NextFunction, Request, Response } from 'express';

import { UserDTO } from '../interfaces/login';

import { StatusCode } from '../utils';

import { loginJoi } from '../validations';

class ValidateLogin {
  private StatusCode = StatusCode;

  private loginJoi = loginJoi;

  constructor() {
    this.validate = this.validate.bind(this);
  }

  async validate(req: Request, res: Response, next: NextFunction) {
    const userDTO = req.body as UserDTO;

    const { error } = this.loginJoi.validate(userDTO);
    if (error) {
      return res.status(this.StatusCode.INVALID_FIELDS).json({ message: error.message });
    }

    next();
  }
}

export default ValidateLogin;
