import { Router } from 'express';
import { LoginController } from '../controllers/login';
import ValidateLogin from '../middlewares/ValidateLogin';

class Login {
  public router: Router;

  private LoginController = new LoginController();

  private ValidateLogin = new ValidateLogin();

  constructor() {
    this.router = Router();
    this.start();
  }

  private start() {
    this.router.post(
      '/',
      this.ValidateLogin.validate,
      this.LoginController.login,
    );
  }
}

export default Login;
