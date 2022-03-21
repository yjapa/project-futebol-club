import { Request, Response, NextFunction } from 'express';
import LoginService from '../services/LoginService';
import { IUser } from '../interfaces/interfaces';
import statusCode from '../enums/StatusCode';

class LoginController {
  private LoginService = new LoginService();

  async login(req: Request, res: Response, _next: NextFunction) {
    const data = req.body as IUser;

    const user = await this.LoginService.login(data);

    return res.status(statusCode.OK).json(user);
  }
}

export default LoginController;
