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

    const { code, data } = await this.LoginService.login(userDTO);

    return res.status(code).json(data);
  }
}

export default LoginController;
