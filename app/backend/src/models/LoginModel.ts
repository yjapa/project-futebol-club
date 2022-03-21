import User from '../database/models/User';
import { IUser } from '../interfaces/interfaces';

class LoginModel {
  private user = User;

  async login({ email }: IUser) {
    const getUser = await this.user.findOne({ where: { email } });

    return getUser;
  }
}

export default LoginModel;
