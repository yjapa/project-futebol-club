import User from '../../database/models/User';
import { UserDTO } from '../../interfaces/login';

class LoginModel {
  private userModel = User;

  async login({ email }: UserDTO) {
    const user = await this.userModel.findOne({ where: { email } });

    if (!user) {
      return user;
    }

    return {
      id: user.id,
      username: user.username,
      role: user.role,
      email: user.email,
      password: user.password,
    };
  }
}

export default LoginModel;
