import LoginModel from '../models/LoginModel';
import { IUser } from '../interfaces/interfaces';
import GenerateToken from '../middlewares/GenerateToken';

class LoginService {
  private LoginModel = new LoginModel();

  private GenerateToken = GenerateToken;

  async login(data: IUser) {
    const user = await this.LoginModel.login(data);

    if (!user) {
      throw new Error('Incorrect email or password');
    }

    const token = this.GenerateToken(user);

    return {
      user,
      token,
    };
  }
}

export default LoginService;
