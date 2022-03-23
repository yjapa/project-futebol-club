import { Router } from 'express';
import { LoginController } from '../controllers/login';

class Login {
  public router: Router;

  private LoginController = new LoginController();

  constructor() {
    this.router = Router();
    this.start();
  }

  private start() {
    this.router.post('/', this.LoginController.login);
  }
}

export default Login;
