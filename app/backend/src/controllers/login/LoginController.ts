import { NextFunction, Request, Response } from 'express';
import { LoginService } from '../../services/login';
import { UserDTO } from '../../interfaces/login';

class LoginController {
  private LoginService = new LoginService();

  constructor() {
    this.login = this.login.bind(this);
  }

  async login(req: Request, res: Response, _nextMiddleware: NextFunction) {
    const userDTO = req.body as UserDTO;

    const { code, data, token } = await this.LoginService.login(userDTO);

    const user = {
      user: data,
      token,
    };
    return res.status(code).json(user);
  }
}

export default LoginController;
