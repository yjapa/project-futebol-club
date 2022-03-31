import { Router, Response } from 'express';
import { LoginController } from '../controllers/login';
import ValidateLogin from '../middlewares/ValidateLogin';
import Auth from '../middlewares/auth';
import { RequestAuth } from '../interfaces/Token';

class Login {
  public router: Router;

  private LoginController = new LoginController();

  private ValidateLogin = new ValidateLogin();

  private auth = new Auth();

  constructor() {
    this.router = Router();
    this.login();
    this.validateLogin();
  }

  private login() {
    this.router.post(
      '/',
      this.ValidateLogin.validate,
      this.LoginController.login,
    );
  }

  private validateLogin() {
    this.router.get(
      '/validate',
      this.auth.validate,
      async (req: RequestAuth, res: Response) => res.status(200).send(req.user?.role),
    );
  }
}

export default Login;
