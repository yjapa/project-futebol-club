// import { compare } from 'bcryptjs';
import generateToken from '../../middlewares/GenerateToken';
import { UserDTO } from '../../interfaces/login';
import { LoginModel } from '../../models/login';
import { StatusCode } from '../../utils';

class LoginService {
  private LoginModel = new LoginModel();

  private generateToken = generateToken;

  async login(userData: UserDTO) {
    const user = await this.LoginModel.login(userData);
    if (!user || userData.password !== user.password) {
      console.log('1');
      return { code: 401, data: { message: 'Incorrect email or password' } };
    }

    // const verifyPassword = await compare(userData.password, user.password);
    // console.log(userData.password);
    // console.log(user.password);
    // if (!verifyPassword) {
    //   console.log('2');

    //   return { code: 401, data: { message: 'Incorrect email or password' } };
    // }

    const { id, username, role, email } = user;

    const token = this.generateToken(user);

    return { code: StatusCode.OK, data: { id, username, role, email }, token };
  }
}

export default LoginService;
