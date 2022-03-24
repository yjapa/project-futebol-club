import { compare } from 'bcryptjs';
import generateToken from '../../middlewares/GenerateToken';
import { UserDTO } from '../../interfaces/login';
import { LoginModel } from '../../models/login';
import { StatusCode } from '../../utils';

class LoginService {
  private LoginModel = new LoginModel();

  private generateToken = generateToken;

  async login(userData: UserDTO) {
    const user = await this.LoginModel.login(userData);
    if (!user) {
      return { code: StatusCode.INVALID_FIELDS, data: { message: 'Incorrect email or password' } };
    }

    const verifyPassword = await compare(userData.password, user.password);
    if (!verifyPassword) {
      return { code: StatusCode.INVALID_FIELDS, data: { message: 'Incorrect email or password' } };
    }

    const { id, username, role, email } = user;

    const token = this.generateToken(user);

    return { code: StatusCode.OK, data: { user: { id, username, role, email }, token } };
  }
}

export default LoginService;
